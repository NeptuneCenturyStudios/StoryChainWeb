<template>
    <div>
        Dashboard
        <div>
            <v-btn @click="update" :to="{name: 'create'}">
                Create a Story
            </v-btn>
        </div>
    </div>
</template>
<script>
    import { mapState } from 'vuex';

    export default {
        title: "Dashboard",
        created() {
            if (!this.isSignedIn) {
                this.$router.push({ name: "sign-in", query: {returnUrl: "dashboard"} });
            }
        },
        data() {
            return {};
        },
        computed: {
            ...mapState(["isSignedIn"])
        },
        methods:
        {
            update() {
                this.$store.commit('updateName', "Foo Bar");
            }
        }
    }
</script>