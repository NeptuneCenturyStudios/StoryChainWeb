<template>

    <div class="d-flex justify-center">
        <v-overlay :absolute="true" :value="loading"></v-overlay>
        <div>
            <p class="text-h4">
                Create a story
            </p>

            <ValidationObserver v-slot="{ invalid }">
                <v-card elevation="2" max-width="25rem" :loading="loading">

                    <template slot="progress">
                        <v-progress-linear color="deep-purple"
                                           height="10"
                                           indeterminate></v-progress-linear>
                    </template>

                    <v-card-title>
                        <p class="text-h6 text--secondary">
                            Let's fill out some details!
                        </p>
                    </v-card-title>

                    <v-card-text>

                        <!--Title-->
                        <ValidationProvider name="Title" rules="required" v-slot="v">
                            <v-text-field label="Title"
                                          type="text"
                                          placeholder="The Witch of the Willows"
                                          required
                                          v-model="title"
                                          hint="A good title can guide other authors on what to write about."></v-text-field>
                            <span class="red--text">{{ v.errors[0] }}</span>
                        </ValidationProvider>

                        <!--First scene-->
                        <ValidationProvider name="First Scene" rules="required" v-slot="v">
                            <v-textarea label="First Scene"
                                        rows="5"
                                        placeholder="It was a dark and stormy night..."
                                        type="textarea"
                                        required
                                        v-model="firstScene"
                                        hint="This is your chance to start the story off with a bang!"></v-textarea>
                            <span class="red--text">{{ v.errors[0] }}</span>
                        </ValidationProvider>

                        <!--Only show previous scene-->
                        <v-switch v-model="showOnlyPreviousScene">
                            <template v-slot:label>
                                Only show authors the previous scene and the title
                            </template>

                        </v-switch>

                        <!--Number of scenes-->
                        <label>Number of Scenes: <strong>{{numberOfScenes}}</strong></label>
                        <v-slider v-model="numberOfScenes"
                                  hint="Few scenes may mean a faster story, but won't leave as much room for development"
                                  max="25"
                                  min="5"></v-slider>

                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="primary" @click="createStory" :loading="loading" :disabled="invalid">
                            Create Story
                        </v-btn>
                        <v-btn :to="{ name: 'dashboard'}" :disabled="loading">
                            Cancel
                        </v-btn>


                    </v-card-actions>

                </v-card>
            </ValidationObserver>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import { httpHelpers } from '../utils/http-helpers';

    import { extend } from "vee-validate";
    import { required } from "vee-validate/dist/rules";

    extend("required", { ...required, message: "{_field_} is required." });

    export default {
        title: 'Create Story',
        data() {
            return {
                loading: false,
                title: null,
                firstScene: null,
                showOnlyPreviousScene: true,
                numberOfScenes: 15
            };
        },
        methods: {
            async createStory() {
                let vm = this;
                vm.loading = true;

                let token = localStorage.getItem("auth");

                try {
                    // Call API to create the story
                    await axios.post(vm.$hostName + '/api/v1/stories', {
                        title: vm.title,
                        firstScene: vm.firstScene,
                        showOnlyPreviousScene: vm.showOnlyPreviousScene,
                        numberOfScenes: vm.numberOfScenes
                    }, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });

                }
                catch (reason) {
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