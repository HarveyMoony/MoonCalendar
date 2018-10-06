import Vue from 'vue'
import router from './router'

import App from './App.vue'

Vue.config.ignoredElements = [/^ion-/]

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
