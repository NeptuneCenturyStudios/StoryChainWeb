//import VueToasted from 'vue-toasted';
import Vue from 'vue';

const httpHelpers = {
	handleError(reason) {
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
