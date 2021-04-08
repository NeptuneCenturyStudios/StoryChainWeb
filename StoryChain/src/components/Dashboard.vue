<template>
    <div>
        Dashboard
        <v-btn @click="update">
            Change Name
        </v-btn>
    </div>
</template>
<script>
    export default {
        data() {
            return {};
        },
        methods:
        {
            update() {
                this.$store.commit('updateName', "Foo Bar");
            }
        }
    }
</script>