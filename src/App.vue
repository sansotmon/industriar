<template lang="pug">
  #app

    .container.logo
      img(src="/src/assets/logo.png")
    section.section
      h1 LOGIN
      nav.nav.has-shadow
        .container
          input.input(v-model="username" type="text" placeholder="Username")
          br
          input.input(v-model="password" type="text" placeholder="Password")
          br
          a.button.btn-primary(@click="doLogin") Log in
          br
          p {{ printResponse }}
          br
          register
</template>

<script>
import userService from './services/login'

export default {
  name: 'app',
  data () {
    return {
      username: '',
      password: '',
      response: ''
    }
  },

  computed: {
    printResponse () {
      return this.response
    }
  },
  methods: {
    doLogin () {
      if (this.username == '' || this.password == ''){
        this.response = 'Debes llenar todos los campos' 
        return
      }
      userService.login('login',this.username,this.password)
      .then (res => {
        this.response = JSON.stringify(res)
      })
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
