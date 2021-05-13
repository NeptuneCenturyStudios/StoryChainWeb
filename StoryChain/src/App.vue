<template>
    <v-app>

        <v-app-bar app
                   color="primary"
                   dark>
            <div class="d-flex align-center">
                <v-img alt="Vuetify Logo"
                       class="shrink mr-2"
                       contain
                       src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
                       transition="scale-transition"
                       width="40" />

                <!--<v-img alt="Vuetify Name"
                       class="shrink mt-1 hidden-sm-and-down"
                       contain
                       min-width="100"
                       src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
                       width="100" />-->
                <span>{{appName}}</span>
            </div>

            <v-spacer></v-spacer>

            <div v-if="!isSignedIn">
                <v-btn :to="{name: 'sign-in'}" text>
                    <span class="mr-2">Sign In</span>

                </v-btn>

                <v-btn :to="{name: 'sign-up'}" text>
                    <span class="mr-2">Sign Up</span>

                </v-btn>

            </div>
            <div v-else>

                <v-menu bottom>

                    <template v-slot:activator="{ on, attrs }">
                        <v-avatar v-on="on">
                            <v-img alt="Avatar"
                                   class="shrink mr-2"
                                   contain
                                   :src="avatarUrl"
                                   transition="scale-transition"
                                   width="40" />
                        </v-avatar>
                    </template>

                    <v-list>
                        <v-list-item-group color="primary">
                            <v-list-item :to="{name: 'account'}">
                                <v-list-item-icon>
                                    <v-icon>mdi-account</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title>My Account</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-divider></v-divider>
                            <v-list-item @click="signOut">
                                <v-list-item-icon>
                                    <v-icon>mdi-logout</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title>Sign Out</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-menu>



            </div>
        </v-app-bar>

        <v-main>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-main>

    </v-app>
</template>

<script>

    import { mapState } from 'vuex';
    import { httpHelpers } from './utils/http-helpers';

    export default {
        name: 'App',
        title: 'Home',
        components: {

        },

        data() {
            return {};
        },

        computed: {
            avatarUrl() {
                let vm = this;
                if (vm.userDetails && vm.userDetails.emailHash) {
                    return `https://www.gravatar.com/avatar/${vm.userDetails.emailHash}`;
                }
                else {
                    return null;
                }
            },
            ...mapState(["appName", "userDetails", "isSignedIn"])
        },
        methods: {
            signOut() {
                // Sign out and go home
                httpHelpers.signOut(this);

            }
        }
    };
</script>
