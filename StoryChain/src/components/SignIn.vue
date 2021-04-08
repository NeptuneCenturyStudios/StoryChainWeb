<template>

    <div class="d-flex justify-center">

        <div>
            <p class="text-h4">
                Ready to resume the fun?
            </p>
            <p class="text-h6 text--secondary">
                Sign into your account now!
            </p>
            <v-card elevation="2" max-width="25rem" :loading="loading">
                <v-overlay :absolute="true" :value="loading"></v-overlay>
                <template slot="progress">
                    <v-progress-linear color="deep-purple"
                                       height="10"
                                       indeterminate></v-progress-linear>
                </template>

                <v-card-text>

                    <v-text-field label="Email"
                                  v-model="email"
                                  hint="example@email.com"></v-text-field>

                    <v-text-field label="Password"
                                  v-model="password"
                                  type="password"></v-text-field>

                    <router-link :to="{name: 'forgot-password'}">Forgot password?</router-link>

                </v-card-text>

                <v-card-actions>
                    <v-btn color="primary" @click="signIn" :loading="loading">
                        Sign In
                    </v-btn>
                    <v-btn color="primary" :to="{ name: 'register'}" :disabled="loading">
                        Register
                    </v-btn>
                    <v-btn :to="{ name: 'home'}" :disabled="loading">
                        Cancel
                    </v-btn>


                </v-card-actions>

            </v-card>
        </div>
    </div>

</template>

<script>
    import axios from 'axios';
    import { httpHelpers } from './../utils/http-helpers';
    import 'material-icons'

    export default {
        data() {
            return {
                loading: false,
                email: null,
                password: null
            };
        },
        methods: {
            async signIn() {
                let vm = this;
                vm.loading = true;

                try {
                    // Call API to create the user's account
                    let response = await axios.post(vm.$hostName + '/api/v1/account/sign-in', { email: vm.email, password: vm.password });

                    try {
                        // User has successfully created their account. Store the token
                        // so it can be sent to the server when the API is called.
                        localStorage.setItem("auth", response.data.token);
                        // Route the user to the dashboard
                        vm.$router.push({ name: "dashboard" });
                    }
                    catch (ex) {
                        // Something went wrong here
                        vm.$toasted.error("Hmm, we couldn't save your account access token for some reason.");
                    }
                }
                catch (reason) {
                    // Handle any ajax errors
                    httpHelpers.handleError(reason);
                }
                finally {
                    vm.loading = false;
                }

            }
        }
    }
</script>