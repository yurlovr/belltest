import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import App from './App';
import router from './router';
import store from './store';
import './assets/style/app.scss';

Vue.use(BootstrapVue).use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
