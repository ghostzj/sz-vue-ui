import Vue from 'vue';
import cfg from '../src/config.js';
import App from './App.vue';
import router from './router';
import './assets/style/index.scss';
import SzUi from '../src/index.js';
import DemoBlock from './components/demo-block';

Vue.use(SzUi);
Vue.component('demo-block', DemoBlock);

Vue.prototype.cfg = cfg;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
