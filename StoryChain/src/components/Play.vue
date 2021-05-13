<template>
    <div class="d-flex justify-center">
        <v-overlay :absolute="true" :value="loading"></v-overlay>
        <div>

            <ValidationObserver v-if="lockedStory" v-slot="{ invalid }">
                <!--Title-->
                <p class="text-h6 text--secondary">
                    {{lockedStory.title}}
                </p>
                <p>
                    {{lockedStory.scenes[0].text}}
                </p>
                {{timeCritical}}
                <v-card elevation="2" max-width="25rem" :loading="loading">

                    <template slot="progress">
                        <v-progress-linear color="deep-purple"
                                           height="10"
                                           indeterminate></v-progress-linear>
                    </template>

                    <v-card-title>
                        Time remaining:
                        {{timeLeft}}
                    </v-card-title>

                    <v-card-text>

                        <!--First scene-->
                        <ValidationProvider name="Next Scene" rules="required" v-slot="v">
                            <v-textarea label="Next Scene"
                                        rows="5"
                                        placeholder="The wind howled through the trees..."
                                        type="textarea"
                                        required
                                        v-model="scene"
                                        hint="Read the previous scene to get an idea of where to go next"></v-textarea>
                            <span class="red--text">{{ v.errors[0] }}</span>
                        </ValidationProvider>

                    </v-card-text>

                    <v-card-actions>
                        <!--Submit button-->
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn class="mr-3" color="purple lighten-3" @click="submitSceneAsync" :loading="loading" :disabled="invalid" v-on="on">
                                    Submit
                                </v-btn>
                            </template>
                            <span>All done? Submit your scene!</span>
                        </v-tooltip>

                        <!--Skip button-->
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn class="mr-3" color="orange" @click="skipAsync" :disabled="loading" v-on="on">
                                    Skip
                                    <v-icon right>
                                        mdi-skip-next
                                    </v-icon>
                                </v-btn>
                            </template>
                            <span>Don't know what to write? Try a different prompt!</span>
                        </v-tooltip>

                        <!--Quit button-->
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn color="red" @click="quitAsync" :disabled="loading" v-on="on">
                                    Quit
                                    <v-icon right>
                                        mdi-power-standby
                                    </v-icon>
                                </v-btn>
                            </template>
                            <span>Don't want to write? Quit and go back to the dashboard.</span>
                        </v-tooltip>

                    </v-card-actions>

                </v-card>
            </ValidationObserver>
            <div v-else>
                <p>Hmm, looks like there are no stories to work on right now. Try creatign a story!</p>

                <v-btn color="purple lighten-3" :to="{name: 'create'}" class="mr-3">
                    Create a Story
                </v-btn>

                <v-btn :to="{name: 'dashboard'}">
                    Dashboard
                </v-btn>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import { httpHelpers } from '../utils/http-helpers';
    import moment from 'moment'

    import { extend } from "vee-validate";
    import { required } from "vee-validate/dist/rules";

    extend("required", { ...required, message: "{_field_} is required." });

    export default {
        title: "Play",
        async created() {
            let vm = this;
            // Check if authenticated
            if (!await httpHelpers.isAuthenticatedAsync(vm, "play")) {
                return;
            }

            vm.loading = true;
            await vm.lockAsync();
            vm.loading = false;
        },
        data() {
            return {
                loading: true,
                lockedStory: null,
                scene: null,
                timeLeft: null,
                timeCritical: false,
                timeUp: false,
                intervalId: null
            };
        },
        computed: {
        },
        methods:
        {
            async lockAsync() {
                let vm = this;

                // Get the auth header and refresh the token if necessary
                let authHeader = await httpHelpers.getAuthHeaderAsync(vm);
                try {

                    // Get the user's stories
                    let result = await axios.get(vm.$hostName + "/api/v1/stories/lock", { headers: { ...authHeader } });
                    vm.lockedStory = result.data;

                    let endTime = moment(vm.lockedStory.lockEnd);

                    // Clear the interval first
                    clearInterval(vm.intervalId);
                    vm.timeCritical = false;
                    vm.timeUp = false;

                    // Start the timer
                    vm.intervalId = setInterval(() => {
                        let duration = moment.duration(endTime.diff(moment()));
                        let totalSeconds = duration.asSeconds();
                        vm.timeLeft = `${duration.get("minutes").toString().padStart(2, "0")}:${duration.get("seconds").toString().padStart(2, "0")}`;
                        
                        if (totalSeconds > 0 && totalSeconds < 60) {
                            vm.timeCritical = true;
                        }
                        else if (totalSeconds <= 0) {
                            vm.timeUp = true;
                            clearInterval(vm.intervalId);
                        }

                    }, 100);

                } catch (reason) {
                    // Handle any ajax errors
                    httpHelpers.handleError(vm, reason);
                }

            },
            async unlockAsync() {
                let vm = this;

                // Get the auth header and refresh the token if necessary
                let authHeader = await httpHelpers.getAuthHeaderAsync(vm);
                try {
                    // Unlock the current story
                    await axios.get(vm.$hostName + "/api/v1/stories/unlock", { headers: { ...authHeader } });

                } catch (reason) {
                    // Handle any ajax errors
                    httpHelpers.handleError(vm, reason);
                }

            },
            async skipAsync() {
                let vm = this;
                vm.loading = true;
                // Unlock story
                await vm.unlockAsync();
                // Lock a new story
                await vm.lockAsync();
                vm.loading = false;
            },
            async quitAsync() {
                let vm = this;
                vm.loading = true;
                // Unlock story
                await vm.unlockAsync();
                // Go back to dashboard
                vm.$router.push({ name: "dashboard" })
                vm.loading = false;
            },
            async submitSceneAsync() {
                let vm = this;
                vm.loading = true;
                // Get the auth header and refresh the token if necessary
                let authHeader = await httpHelpers.getAuthHeaderAsync(vm);
                try {
                    let scene = {
                        lockId: vm.lockedStory.lockId,
                        scene: vm.scene
                    };
                    // Post the new scene
                    let sceneResult = await axios.post(vm.$hostName + "/api/v1/stories/scene", scene, { headers: { ...authHeader } });

                    // Notify user the story has been created
                    vm.$toasted.success("Your scene has been successfully submitted!");

                    // Go to scene view
                    vm.$router.push({ name: "scene", params: { storyId: vm.lockedStory.storyId, sceneId: sceneResult.data } })

                } catch (reason) {
                    // Handle any ajax errors
                    httpHelpers.handleError(vm, reason);
                }
                finally {
                    vm.loading = false;
                }

            }
        }
    }
</script>