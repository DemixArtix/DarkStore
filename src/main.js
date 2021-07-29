import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
import './assets/styles/normalize.css';
import './assets/styles/variables.css';
import './assets/styles/grid.css';
import './assets/styles/fonts.css';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
