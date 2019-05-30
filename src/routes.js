import Vue from 'vue';

import IaLogin from './components/activity/login.vue'
import IaHomeTasks from './components/activity/homeTasks.vue'
import IaGetUsers from './components/activity/getUsers.vue'

const routes =[
	{ path: '/', component: IaLogin , name: 'login'},
    { path: '/home', component: IaHomeTasks , name: 'home'},
    { path: '/getusers', component: IaGetUsers , name: 'getusers'}
    
]
export default routes