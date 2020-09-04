import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { get, post } from './api'
import '@/libs/vant'
import '@/static/scss/reset.scss'

Vue.config.productionTip = false

Vue.prototype.$post = post
Vue.prototype.$get = get

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
