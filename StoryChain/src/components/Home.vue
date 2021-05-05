<template>

    <div class="mx-auto text-center" style="max-width: 30rem">
        <div>
            <p class="text-h1">Welcome!</p>
            <p class="text-h4">Sign in or sign up to start playing!</p>
        </div>
        <div>
            <v-btn color="primary" :to="{ name: 'sign-in'}" class="mr-3">
                Sign In
            </v-btn>
            <v-btn color="primary" :to="{ name: 'sign-up'}">
                Sign Up
            </v-btn>
        </div>
    </div>

</template>

<script>
    import { mapState } from 'vuex';
import { httpHelpers } from '../utils/http-helpers';

    export default {
        name: 'Home',
        created() {
            
            let vm = this;

            // If the user is already logged in, then redirect to the dashboard
            let isAuthenticated = httpHelpers.isAuthenticated(vm);
            if (isAuthenticated) {
                // Go to dashboard. If the auth fails for some reason, the app
                // will redirect the user to the login page.
                vm.$router.push({ name: "dashboard" });
            }

        },
        computed: {
            ...mapState(["appName", "name", "isSignedIn"])
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

