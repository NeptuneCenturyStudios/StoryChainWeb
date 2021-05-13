<template>
    <div class="d-flex justify-center">
        <v-card v-if="scene" max-width="25rem">
            <v-card-title>
                <div>
                    <div class="subheadingfont-weight-bold">
                        {{ scene.title }}
                    </div>

                </div>

            </v-card-title>

            <v-divider></v-divider>

            <v-card-text>
                <span>{{ scene.text }}</span>
                <em><span class="text--secondary text-subtitle-2">- {{scene.firstName}} {{scene.lastName}}</span></em>
            </v-card-text>

            <v-card-actions>
                <v-btn color="purple lighten-3" :to="{name: 'play'}" class="mr-3">
                    Keep Writing!
                </v-btn>

                <v-btn :to="{name: 'dashboard'}">
                    Dashboard
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
    import axios from 'axios';
    import { httpHelpers } from '../utils/http-helpers';

    export default {
        title: "Scene",
        async created() {
            let vm = this;

            if (!await httpHelpers.isAuthenticatedAsync(vm, "home")) {
                return;
            }

            vm.getSceneAsync();

        },
        data() {
            return {
                loading: false,
                scene: null
            };
        },
        methods: {
            async getSceneAsync() {

                let vm = this;
                vm.loading = true;
                // Fetch the data for the dashboard
                let authHeader = await httpHelpers.getAuthHeaderAsync(vm);
                try {

                    // Get the route params
                    let storyId = vm.$route.params.storyId;
                    let sceneId = vm.$route.params.sceneId;

                    // Get the user's stories
                    let sceneResult = await axios.get(vm.$hostName + `/api/v1/stories/${storyId}/scene/${sceneId}`, { headers: { ...authHeader } });
                    vm.scene = sceneResult.data

                } catch (reason) {
                    // Handle any ajax errors
                    httpHelpers.handleError(vm, reason);
                }

                vm.loading = false;
            }
        }
    }
</script>