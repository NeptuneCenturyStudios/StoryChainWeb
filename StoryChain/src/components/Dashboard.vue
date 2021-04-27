<template>
    <div>
        Dashboard
        <div>
            <v-btn @click="update" :to="{name: 'create'}">
                Create a Story
            </v-btn>

            <v-data-iterator :items="items"
                             :items-per-page.sync="itemsPerPage"
                             :page.sync="page"
                             :search="search"
                             :sort-by="sortBy.toLowerCase()"
                             :sort-desc="sortDesc"
                             hide-default-footer>


                <template v-slot:header>
                    <v-toolbar dark
                               color="blue darken-3"
                               class="mb-1">
                        <v-text-field v-model="search"
                                      clearable
                                      flat
                                      solo-inverted
                                      hide-details
                                      prepend-inner-icon="mdi-magnify"
                                      label="Search"></v-text-field>
                        <template v-if="$vuetify.breakpoint.mdAndUp">
                            <v-spacer></v-spacer>
                            <v-select v-model="sortBy"
                                      flat
                                      solo-inverted
                                      hide-details
                                      :items="keys"
                                      prepend-inner-icon="mdi-magnify"
                                      label="Sort by"></v-select>
                            <v-spacer></v-spacer>
                            <v-btn-toggle v-model="sortDesc"
                                          mandatory>
                                <v-btn large
                                       depressed
                                       color="blue"
                                       :value="false">
                                    <v-icon>mdi-arrow-up</v-icon>
                                </v-btn>
                                <v-btn large
                                       depressed
                                       color="blue"
                                       :value="true">
                                    <v-icon>mdi-arrow-down</v-icon>
                                </v-btn>
                            </v-btn-toggle>
                        </template>
                    </v-toolbar>
                </template>

                <template v-slot:default="props">
                    <v-row>
                        <v-col v-for="item in props.items"
                               :key="item.name"
                               cols="12"
                               sm="6"
                               md="4"
                               lg="3">
                            <v-card>
                                <v-card-title class="subheading font-weight-bold">
                                    {{ item.name }}
                                </v-card-title>

                                <v-divider></v-divider>

                                <v-list dense>
                                    <v-list-item v-for="(key, index) in filteredKeys"
                                                 :key="index">
                                        <v-list-item-content :class="{ 'blue--text': sortBy === key }">
                                            {{ key }}:
                                        </v-list-item-content>
                                        <v-list-item-content class="align-end"
                                                             :class="{ 'blue--text': sortBy === key }">
                                            {{ item[key.toLowerCase()] }}
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-card>
                        </v-col>
                    </v-row>
                </template>

            </v-data-iterator>
        </div>
    </div>
</template>
<script>
    import { mapState } from 'vuex';

    export default {
        title: "Dashboard",
        created() {
            if (!this.isSignedIn) {
                this.$router.push({ name: "sign-in", query: { returnUrl: "dashboard" } });
            }
        },
        data() {
            return {
                sortBy: ""
            };
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