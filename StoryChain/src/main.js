import Vue from 'vue';
import App from './App.vue';
import Toasted from 'vue-toasted';
import { ValidationProvider, ValidationObserver } from 'vee-validate';

// Load external plugins
import vuetify from './plugins/vuetify';
import router from './plugins/router';
import store from './plugins/vuex';

// Mixins
import titleMixin from './mixins/title-mixin';

// Plugins
Vue.use(Toasted, { duration: 2000, iconPack: 'material' })

// Mixins
Vue.mixin(titleMixin);

// Configurations
Vue.config.productionTip = true;

Vue.prototype.$hostName = 'https://localhost:44324';

// Register global components
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);



new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app');
