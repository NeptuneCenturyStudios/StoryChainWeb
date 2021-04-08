import Vue from 'vue';
import App from './App.vue';
import Toasted from 'vue-toasted';

// Load external plugins
import vuetify from './plugins/vuetify';
import router from './plugins/router';
import store from './plugins/vuex';

// Plugins
Vue.use(Toasted)

Vue.config.productionTip = true;

Vue.prototype.$hostName = 'https://localhost:44324';

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app');
