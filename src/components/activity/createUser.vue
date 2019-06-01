<template>
    <div>
        <IaHeader/>
        <section>
            <div class="description-page">
                <img src="src/images/icons/svgs/regular/check-square.svg">
                <span>New user</span>
            </div>
            <form style="margin-left: 25%; margin-right: 25%;">
              <div class="form-group">
                <label>Name</label>
                <input v-model="nameUser"type="text" class="form-control" placeholder="Name">
              </div>
              <div class="form-group">
                <label>Email</label>
                <input v-model="email" type="text" class="form-control"  placeholder="Type">
              </div>
              <div class="form-group">
                <label>Username</label>
                <input v-model="username" type="text" class="form-control"  placeholder="Type">
              </div>
              <div class="form-group">
                <label>Password</label>
                <input v-model="password" type="password" class="form-control"  placeholder="Type">
              </div>
              <div class="form-group">
                <label>Type</label>
                <input v-model="typeUser" type="text" class="form-control"  placeholder="Type">
              </div>
              <div align="center">
                <button  @click="DoCreateUser" type="submit" class="btn btn-primary">Create user</button>
              </div><br>
              <div align="center">
                  <p>{{ printResponse }}</p>
              </div>
            </form>
        </section>
    </div>
</template>

<script>
import IaHeader from '../../components/layout/header.vue'
import userService from '../../services/querys'

export default {
  name: 'app',
  components: {IaHeader},
  data () {
    return{
      nameUser: '',
      email: '',
      username:'',
      password:'',
      typeUser:'',
      response:''
    }
  },
  computed: {
    printResponse () {
      return this.response
    }
  },
  methods: {
    DoCreateUser () {
        if (this.nameUser == '' || this.email == '' || this.username == '' || this.password == '' || this.typeUser == ''){
          this.response = 'Debe llenar todos los campos...' 
          return
        }
        userService.register('register',this.nameUser, this.email, this.username, this.password, this.typeUser)
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