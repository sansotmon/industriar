import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import RegisterPage from './register/register.vue'

import routes from './routes'

Vue.use(VueRouter)
Vue.component('register', RegisterPage)

const router = new VueRouter ({ routes })

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
