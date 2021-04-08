<template>

    <div class="d-flex justify-center">
        <v-overlay :absolute="true" :value="loading"></v-overlay>
        <div>
            <p class="text-h4">
                Ready to join the fun?
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
                            Create your account now!
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
                                          :type="showPassword ? 'text' : 'password'"
                                          required
                                          v-model="password"
                                          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                          @click:append="showPassword = !showPassword"
                                          hint="Make it secure"></v-text-field>
                            <span class="red--text">{{ v.errors[0] }}</span>
                        </ValidationProvider>

                        <p>
                            By creating your account, you agree to the terms and privacy policy.
                        </p>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="primary" @click="signUp" :loading="loading" :disabled="invalid">
                            Sign Up
                        </v-btn>
                        <v-btn :to="{ name: 'home'}" :disabled="loading">
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
    import 'material-icons';

    import { extend } from "vee-validate";
    import { required, email } from "vee-validate/dist/rules";

    extend("required", { ...required, message: "{_field_} is required." });
    extend("email", email);

    export default {
        data() {
            return {
                loading: false,
                showPassword: false,
                email: null,
                password: null
            };
        },
        methods: {
            async signUp() {
                let vm = this;
                vm.loading = true;

                try {
                    // Call API to create the user's account
                    let response = await axios.post(vm.$hostName + '/api/v1/account/sign-up', { email: vm.email, password: vm.password });

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