import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import IaLogin from './components/activity/login.vue'
import IaHomeTasks from './components/activity/homeTasks.vue'
import IaGetUsers from './components/activity/getUsers.vue'

import routes from './routes'

Vue.use(VueRouter)
Vue.component('login', IaLogin)
Vue.component('home', IaHomeTasks)
Vue.component('getusers', IaGetUsers)

const router = new VueRouter ({ routes })

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
