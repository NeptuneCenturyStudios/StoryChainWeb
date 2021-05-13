<template>
    <div>
        <p class="text-h4">Dashboard</p>
        <div>
            <v-btn color="purple lighten-3" :to="{name: 'create'}" class="mr-3">
                Create a Story
            </v-btn>

            <v-btn color="blue lighten-1" :to="{name: 'play'}">
                Play
            </v-btn>

            <v-data-iterator :items="myStories"
                             :footer-props="{itemsPerPageOptions: [4, 8, 12, 24]}"
                             :items-per-page.sync="itemsPerPage"
                             :page.sync="page"
                             :search="search"
                             :sort-by="sortBy.toLowerCase()"
                             :sort-desc="sortDesc"
                             class="mt-3">


                <template v-slot:header>
                    <v-toolbar dark
                               color="blue darken-3"
                               class="mb-1">
                        <v-text-field v-model="search"
                                      clearable
                                      flat
                                      solo-inverted
                                      hide-details
                                      prepend-inner-icon="mdi-magnify"
                                      label="Search"></v-text-field>
                        <template v-if="$vuetify.breakpoint.mdAndUp">
                            <v-spacer></v-spacer>
                            <v-select v-model="sortBy"
                                      flat
                                      solo-inverted
                                      hide-details
                                      :items="keys"
                                      prepend-inner-icon="mdi-magnify"
                                      label="Sort by"></v-select>
                            <v-spacer></v-spacer>
                            <v-btn-toggle v-model="sortDesc"
                                          mandatory>
                                <v-btn large
                                       depressed
                                       color="blue"
                                       :value="false">
                                    <v-icon>mdi-arrow-up</v-icon>
                                </v-btn>
                                <v-btn large
                                       depressed
                                       color="blue"
                                       :value="true">
                                    <v-icon>mdi-arrow-down</v-icon>
                                </v-btn>
                            </v-btn-toggle>
                        </template>
                    </v-toolbar>
                </template>

                <template v-slot:default="props">
                    <v-row>
                        <v-col v-for="item in props.items"
                               :key="item.title"
                               cols="12"
                               sm="6"
                               md="4"
                               lg="3">
                            <v-card>
                                <v-card-title>
                                    <div>
                                        <div class="subheadingfont-weight-bold">
                                            {{ item.title }}
                                        </div>
                                        <div>
                                            <em><span class="text--secondary text-subtitle-2">Started by {{item.createdBy.firstName}} {{item.createdBy.lastName}}</span></em>
                                        </div>
                                    </div>

                                </v-card-title>

                                <v-divider></v-divider>

                                <v-card-text>
                                    <span>{{ item.scene && item.scene.text }}</span>
                                    <em><span class="text--secondary text-subtitle-2">- {{item.scene.author.firstName}} {{item.scene.author.lastName}}</span></em>
                                    <v-progress-linear color="light-blue"
                                                       height="15"
                                                       :value="item.progress"
                                                       striped>
                                        {{item.totalScenes}} of {{item.maxScenes}}
                                    </v-progress-linear>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </template>

            </v-data-iterator>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    import { httpHelpers } from '../utils/http-helpers';

    export default {
        title: "Dashboard",
        async created() {
            let vm = this;

            if (!await httpHelpers.isAuthenticatedAsync(vm, "home")) {
                return;
            }

            vm.getMyStoriesAsync();

        },
        data() {
            return {
                sortBy: "title",
                myStories: [],
                itemsPerPage: 12,
                page: 1,
                search: null,
                sortDesc: false,
                keys: ["Title"]
            };
        },
        computed: {
        },
        methods:
        {
            async getMyStoriesAsync() {
                let vm = this;
                // Fetch the data for the dashboard
                let authHeader = await httpHelpers.getAuthHeaderAsync(vm);
                try {
                    // Get the user's stories
                    let storiesResult = await axios.get(vm.$hostName + "/api/v1/stories/mine", { headers: { ...authHeader } });
                    vm.myStories = storiesResult.data

                } catch (reason) {
                    // Handle any ajax errors
                    httpHelpers.handleError(vm, reason);
                }
            }
        }
    }
</script>