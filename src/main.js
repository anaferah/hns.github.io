import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './assets/custom.js'
import VuePreloaders from 'vue-preloaders'

Vue.use(VuePreloaders, /*{ options }*/)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
