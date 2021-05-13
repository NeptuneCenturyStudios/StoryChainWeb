import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

// Create store object
export default new Vuex.Store({
    state: {
        appName: 'Plot Mash',
        isSignedIn: false,
        userDetails: null
    },
    mutations: {
        updateUserDetails(state, value) {
            state.userDetails = value;
        },
        isSignedIn(state, value) {
            state.isSignedIn = value;
        }
        
    }
});
