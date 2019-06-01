import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import CORS from 'cors'

import IaLogin from './components/activity/login.vue'
import IaHomeTasks from './components/activity/homeTasks.vue'
import IaGetUsers from './components/activity/getUsers.vue'
import IaCreateUser from './components/activity/createUser.vue'
import IaDeleteUser from './components/activity/deleteUser.vue'
import IaTaskSummary from './components/activity/taskSummary.vue'
import IaGetPassword from './components/activity/getPassword.vue'
import IaCreateTask from './components/activity/createTask.vue'

import routes from './routes'

Vue.use(VueRouter)
Vue.use(CORS)
Vue.component('login', IaLogin)
Vue.component('home', IaHomeTasks)
Vue.component('getusers', IaGetUsers)
Vue.component('createuser', IaCreateUser)
Vue.component('deleteuser', IaDeleteUser)
Vue.component('tasksummary', IaTaskSummary)
Vue.component('getpassword', IaGetPassword)
Vue.component('createtask', IaCreateTask)

const router = new VueRouter ({ routes })

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
