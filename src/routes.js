import Vue from 'vue';
import IaHomeTasks from './components/activity/homeTasks.vue'
import IaLogin from './components/activity/login.vue'

const routes =[
    { path: '/home', component: IaHomeTasks , name: 'home'},
    { path: '/', component: IaLogin , name: 'login'}
]
export default routes