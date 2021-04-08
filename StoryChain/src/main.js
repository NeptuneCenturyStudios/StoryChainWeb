import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './plugins/router';
import Toasted from 'vue-toasted';

Vue.use(Toasted)

Vue.config.productionTip = true;

new Vue({
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app');
