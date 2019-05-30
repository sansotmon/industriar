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

export default {
  name: 'app',
  components: {IaFooter,IaLogin},
  data () {
    return {
      username: '',
      password: '',
      response: '',
      url:'src/images/logo.png'
    }
  },

  computed: {
    printResponse () {
      return this.response
    },
    hrefLogo() {
      return this.url
    }
  },
  methods: {
    doLogin () {
      if (this.username == '' || this.password == ''){
        this.response = 'Debes llenar todos los campos' 
        this.$router.go('register');
        return
      }
      userService.login('login',this.username,this.password)
      .then (res => {
        if(res.error){
          this.response = JSON.stringify(res.error)
        }else{
          this.response = JSON.stringify(res.message)
        }
      })
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
