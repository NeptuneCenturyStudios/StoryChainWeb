import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

// Create store object
export default new Vuex.Store({
    state: {
        appName: 'Plot Mash',
        isSignedIn: false,
        name: 'Test'
    },
    mutations: {
        updateName(state, name) {
            state.name = name;
        },
        isSignedIn(state, value) {
            state.isSignedIn = value;
        }
        
    }
});
