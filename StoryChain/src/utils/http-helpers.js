//import VueToasted from 'vue-toasted';
import Vue from 'vue';
import jwtDecode from "jwt-decode";
import axios from 'axios';

const TOKEN_STORE_NAME = "auth";
const REFRESH_TOKEN_STORE_NAME = "refreshToken";

const httpHelpers = {
    // Gets the authorization header from the auth token stored in our app
    async getAuthHeaderAsync(vm) {
        let token = null;
        // Get the auth token
        try {

            token = localStorage.getItem(TOKEN_STORE_NAME);
            // Check the token to see if it is expiring. If it is, then we need to refresh it
            let decodedToken = jwtDecode(token);
            if (decodedToken) {

                // Check if the token is about to expire
                if (Date.now() >= decodedToken.exp * 1000) {
                    let refreshToken = localStorage.getItem(REFRESH_TOKEN_STORE_NAME);
                    
                    // Expired. Call for a new refresh token
                    let refreshResult = await axios.post(vm.$hostName + '/api/v1/account/refresh-token', { token: token, refreshToken: refreshToken });
                    if (refreshResult.data.success) {
                        
                        // Store the new tokens and use them
                        this.signIn(vm, refreshResult.data);
                        token = refreshResult.data.token;
                    }

                }


            }

        } catch (ex) {
            token = null;
        }

        return {
            'Authorization': `Bearer ${token}`
        };

    },
    signIn(vm, auth) {
        // Store the access token somewhere
        localStorage.setItem(TOKEN_STORE_NAME, auth.token);
        // TODO: Find a better place for this
        localStorage.setItem(REFRESH_TOKEN_STORE_NAME, auth.refreshToken);
        // Set signed in state
        vm.$store.commit('isSignedIn', true);
    },
    signOut(vm) {
        // Clear the auth token
        try {
            localStorage.removeItem(TOKEN_STORE_NAME);
        }
        finally {
            // Set the global flag that we're signed out
            vm.$store.commit("isSignedIn", false);
            // Go to home page
            vm.$router.push({ name: "home" });
        }
    },
    isAuthenticated(vm) {
        try {
            let auth = localStorage.getItem(TOKEN_STORE_NAME);
            vm.$store.commit('isSignedIn', !!auth);
            return !!auth;

        } catch (e) {
            return false;
        }

    },
    handleError(vm, reason) {
        if (reason.response && reason.response.status === 401) {
            // The user was not authorized. Redirect them to the login page and show an error message.
            vm.$router.push({ name: "sign-in" });
        }

        if (reason.response && reason.response.data) {


            let errors = [];
            if (typeof reason.response.data === 'string') {
                // Data is the error. It is probably not an error we want to show to the user, so make something generic
                Vue.toasted.error("Whoops, something happened. Maybe try that again later?", { duration: 2000, iconPack: 'material', icon: 'lock' });
            }
            else if (typeof reason.response.data === 'object') {
                // eslint-disable-next-line no-unused-vars
                for (const [key, value] of Object.entries(reason.response.data)) {
                    errors = errors.concat(value);
                }
                Vue.toasted.error(errors.join("<br />"), { icon: 'error' });
            }
            else if (reason.response.data.errors) {
                // eslint-disable-next-line no-unused-vars
                for (const [key, value] of Object.entries(reason.response.data.errors)) {
                    errors = errors.concat(value);
                }
                Vue.toasted.error(errors.join("<br />"), { icon: 'error' });
            }
        }
    }
}

export { httpHelpers };
