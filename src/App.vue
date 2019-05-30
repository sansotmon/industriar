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
import userService from './services/login'
import IaFooter from './components/layout/footer.vue'
import IaLogin from './components/activity/login.vue'
import IaGetUsers from './components/activity/getUsers.vue'

export default {
  name: 'app',
  components: {IaFooter,IaLogin,IaGetUsers},
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
