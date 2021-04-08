//import VueToasted from 'vue-toasted';
import Vue from 'vue';

const httpHelpers = {
	handleError(reason) {
        if (reason.response && reason.response.data) {
            let errors = [];
            // eslint-disable-next-line no-unused-vars
            for (const [key, value] of Object.entries(reason.response.data.errors)) {
                errors = errors.concat(value);
            }
            Vue.toasted.error(errors.join("<br />"), { duration: 2000, iconPack: 'material', icon: 'lock' });
        }
	}
}

export { httpHelpers };
