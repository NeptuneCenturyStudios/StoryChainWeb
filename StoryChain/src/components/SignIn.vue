<template>

    <div class="d-flex justify-center">
        <v-overlay :absolute="true" :value="loading"></v-overlay>
        <div>
            <p class="text-h4">
                Ready to resume the fun?
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
                            Sign into your account now!
                        </p>
                    </v-card-title>

                    <v-card-text>

                        <!--Email-->
                        <ValidationProvider name="Email" rules="required|email" v-slot="v">
                            <v-text-field label="Email"
                                          type="email"
                                          required
                                          v-model="email"
                                          hint="example@email.com"></v-text-field>
                            <span class="red--text">{{ v.errors[0] }}</span>
                        </ValidationProvider>

                        <!--Password-->
                        <ValidationProvider name="Password" rules="required" v-slot="v">
                            <v-text-field label="Password"
                                          type="password"
                                          required
                                          v-model="password"></v-text-field>
                            <span class="red--text">{{ v.errors[0] }}</span>
                        </ValidationProvider>

                        <!--Remember me-->
                        <v-switch>
                            <template v-slot:label>
                                Remember me
                            </template>

                        </v-switch>

                        <router-link :to="{name: 'forgot-password'}">Forgot password?</router-link>

                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="primary" @click="signIn" :loading="loading" :disabled="invalid">
                            Sign In
                        </v-btn>

                        <v-btn :to="{ name: 'home'}" :disabled="loading">
                            Cancel
                        </v-btn>


                    </v-card-actions>

                </v-card>
            </ValidationObserver>

            <p class="text--secondary mt-3">
                Don't have an account? <router-link :to="{name: 'sign-up'}">Sign up!</router-link>
            </p>

        </div>


    </div>

</template>

<script>
    import axios from 'axios';
    import { httpHelpers } from './../utils/http-helpers';
    import 'material-icons';
    import { extend } from "vee-validate";
    import { required, email } from "vee-validate/dist/rules";

    extend("required", { ...required, message: "{_field_} is required." });
    extend("email", email);

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