<template >
    <div class="container customfont" id="app">
    <div class="row" style="margin-top: 7%">
      <div class="col-12" align="center">
        <figure>
          <img :src="hrefLogo"/>
          <p>IndustriAR</p>
        </figure>
      </div>
    </div>
    <div class="login">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Username</label>
          <input v-model="username" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="row">
        <div class="col-12" align="right" style="margin-bottom: 5%;">
          <a href="rememberPassword.html">Remember password</a>
        </div>
        <div>
          <p>{{ printResponse }}</p>
        </div><br>
      </div>
        <div align="center">
          <input type="button" class="btn btn-primary" role="button" @click="doLogin"  name="Log in" value="Log in"></input>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import userService from './services/login'

export default {
  name: 'app',
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
