import Vue from 'vue'
window.Vue = Vue;
import App from './App.vue'
import Button from '../packages/button';
Vue.config.productionTip = false
Vue.use(Button);
new Vue({
  render: h => h(App)
}).$mount('#app')
