import Vue from 'vue';

import IaLogin from './components/activity/login.vue'
import IaHomeTasks from './components/activity/homeTasks.vue'
import IaGetUsers from './components/activity/getUsers.vue'
import IaCreateUser from './components/activity/createUser.vue'
import IaDeleteUser from './components/activity/deleteUser.vue'
import IaTaskSummary from './components/activity/taskSummary.vue'
import IaGetPassword from './components/activity/getPassword.vue'
import IaCreateTask from './components/activity/createTask.vue'

const routes =[
	{ path: '/', component: IaLogin , name: 'login'},
    { path: '/home', component: IaHomeTasks , name: 'home'},
    { path: '/get-users', component: IaGetUsers , name: 'getusers'},
    { path: '/create-user', component: IaCreateUser , name: 'createuser'},
    { path: '/delete-user', component: IaDeleteUser , name: 'deleteuser'},
    { path: '/task-summary', component: IaTaskSummary , name: 'tasksummary'},
    { path: '/get-password', component: IaGetPassword , name: 'getpassword'},
    { path: '/create-task', component: IaCreateTask , name: 'createtask'}
]

export default routes