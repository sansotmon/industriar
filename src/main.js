import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import IaHomeTasks from './components/activity/homeTasks.vue'
import IaLogin from './components/activity/login.vue'

import routes from './routes'

Vue.use(VueRouter)
Vue.component('home', IaHomeTasks)
Vue.component('login', IaLogin)

const router = new VueRouter ({ routes })

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
