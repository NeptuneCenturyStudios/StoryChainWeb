<template>
    <v-container>

        <div class="d-flex justify-center">



            <div>
                <p class="text-h4">
                    Ready to join the fun?
                </p>
                <p class="text-h6 text--secondary">
                    Create your account now!
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
                                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                      :type="showPassword ? 'text' : 'password'"
                                      @click:append="showPassword = !showPassword"
                                      hint="Make it secure"></v-text-field>
                        <p>
                            By creating your account, you agree to the terms and privacy policy.
                        </p>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="primary" @click="register" :loading="loading">
                            Create Account
                        </v-btn>
                        <v-btn :to="{ name: 'home'}" :disabled="loading">
                            Cancel
                        </v-btn>
                        

                    </v-card-actions>

                </v-card>
            </div>
        </div>

    </v-container>
</template>

<script>
    import axios from 'axios';
    import 'material-icons'
    
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
            async register() {
                let vm = this;
                vm.loading = true;
      
                try {
                    // Call API to create the user's account
                    let response = await axios.post('https://localhost:44324/api/v1/account/register', { email: vm.email, password: vm.password });

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
                    if (reason.response && reason.response.data) {
                        let errors = [];
                        // eslint-disable-next-line no-unused-vars
                        for (const [key, value] of Object.entries(reason.response.data.errors)) {
                            errors = errors.concat(value);
                        }
                        vm.$toasted.error(errors.join("<br />"), { duration: 2000, iconPack: 'material', icon: 'lock' });
                    }
                }
                finally {
                    vm.loading = false;
                }

            }
        }
    }
</script>