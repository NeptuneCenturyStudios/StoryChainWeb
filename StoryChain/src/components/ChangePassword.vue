<template>

    <div class="d-flex justify-center">
        <v-overlay :absolute="true" :value="loading"></v-overlay>
        <div>
            <p class="text-h4">
                Change password
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
                            Let's get your password fixed!
                        </p>
                    </v-card-title>

                    <v-card-text>
                        
                        <!--Password-->
                        <ValidationProvider name="Password" rules="required" v-slot="v">
                            <v-text-field label="Password"
                                          autocomplete="new-password"
                                          :type="showPassword ? 'text' : 'password'"
                                          required
                                          v-model="password"
                                          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                          @click:append="showPassword = !showPassword"
                                          hint="Make it secure"></v-text-field>
                            <span class="red--text">{{ v.errors[0] }}</span>
                        </ValidationProvider>

                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="primary" @click="changePassword" :loading="loading" :disabled="invalid">
                            Change Password
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
    
    import { extend } from "vee-validate";
    import { required } from "vee-validate/dist/rules";

    extend("required", { ...required, message: "{_field_} is required." });

    export default {
        title: 'Change Password',
        props: {
            userId: String,
            code: String
        },
        data() {
            return {
                loading: false,
                showPassword: false,
                email: null,
                password: null,
                
            };
        },
        methods: {
            async changePassword() {
                let vm = this;
                vm.loading = true;
                
                try {
                    // Call API to create the user's account
                    await axios.post(vm.$hostName + '/api/v1/account/change-password', { userId: vm.userId, code: vm.code, password: vm.password });
                    vm.$toasted.success("Your password has been changed!");
                    vm.$router.push({ name: "sign-in" });
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