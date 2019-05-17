<template lang="pug">
      h1 REGISTER
        .container
          input.input(v-model="name" type="text" placeholder="Name")
          br
          input.input(v-model="username" type="text" placeholder="Username")
          br
          input.input(v-model="password" type="text" placeholder="Password")
          br
          a.button(@click="goToRegister") Do Register
          br
          p {{ printResponse }}
      
</template>

<script>
import userService from '../services/login'

export default {
  data () {
    return {
      name: '',
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
    goToRegister () {
      if (this.username == '' || this.password == '' || this.name == ''){
        this.response = 'Debes llenar todos los campos' 
        return
      }
      userService.register('register',this.name, this.username,this.password)
      .then (res => {
        this.response = JSON.stringify(res)
      })
    }
  }
}
</script>

<style lang="scss">
  @import '../scss/main.scss'
</style>