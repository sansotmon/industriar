<template >
  <div class="container customfont" id="app">
      <div>
        <router-view></router-view>
      </div><br><br><br>
      <IaFooter>
      </IaFooter>
    </div>
  </div>
</template>

<script>

import IaFooter from './components/layout/footer.vue'
import IaLogin from './components/activity/login.vue'
import IaGetUsers from './components/activity/getUsers.vue'
import IaCreateUser from './components/activity/createUser.vue'
import IaDeleteUser from './components/activity/deleteUser.vue'
import IaTaskSummary from './components/activity/taskSummary.vue'
import IaGetPassword from './components/activity/getPassword.vue'
import IaCreateTask from './components/activity/createTask.vue'

export default {
  name: 'app',
  components: {IaFooter,IaLogin,IaGetUsers,IaCreateUser,IaDeleteUser,IaTaskSummary,IaGetPassword,IaCreateTask},
  data () {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
