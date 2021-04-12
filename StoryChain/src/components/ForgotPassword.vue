<template>

    <div class="d-flex justify-center">
        <v-overlay :absolute="true" :value="loading"></v-overlay>
        <div>
            <p class="text-h4">
                Forgot your password?
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
                            It's okay. We understand. There's so much to remember these days. Just enter your email address and we'll send you a link to reset it.
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

                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="primary" @click="resetPassword" :loading="loading" :disabled="invalid">
                            Reset
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
    import { httpHelpers } from './../utils/http-helpers';
    import 'material-icons';
    import { extend } from "vee-validate";
    import { required, email } from "vee-validate/dist/rules";

    extend("required", { ...required, message: "{_field_} is required." });
    extend("email", email);

    export default {
        title: 'Forgot Password',
        data() {
            return {
                loading: false,
                email: null
            };
        },
        methods: {
            async resetPassword() {
                let vm = this;
                vm.loading = true;

                try {
                    // Call API to create the user's account
                    await axios.post(vm.$hostName + '/api/v1/account/forgot-password', { email: vm.email });

                    // Something went wrong here
                    vm.$toasted.success("We just sent you an email with instructions on how to reset your password.", { icon: "check" });
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