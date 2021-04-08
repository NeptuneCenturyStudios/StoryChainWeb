<template>

    <div class="mx-auto text-center" style="max-width: 30rem">
        <div>
            <p class="text-h1">Welcome!</p>
            <p class="text-h4">Sign in or register to start playing!</p>
        </div>
        <div>
            <v-btn color="primary" :to="{ name: 'sign-in'}" class="mr-3">
                Sign In
            </v-btn>
            <v-btn color="primary" :to="{ name: 'register'}">
                Register
            </v-btn>
        </div>
    </div>

</template>

<script>
    export default {
        mounted() {
            // If the user is already logged in, then redirect to the dashboard
        },
        name: 'Home',

    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

