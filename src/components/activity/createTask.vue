<template>
	<div>
        <IaHeader/>
        <section>
            <div class="description-page">
                <img src="src/images/icons/svgs/regular/check-square.svg">
                <span>New Task</span>
            </div>
            <form style="margin-left: 25%; margin-right: 25%;">
              <div class="form-group">
                <label>Name</label>
                <input v-model="nameTask" type="text" class="form-control" placeholder="Name">
              </div>
              <div class="form-group">
                <label>Type</label>
                <input v-model="typeTask" type="text" class="form-control"  placeholder="Type">
              </div>
              <div class="form-group">
                <label>To assign</label>
                <input v-model="assign" type="text" class="form-control"  placeholder="To assign">
              </div>
              <div align="center">
              	<button  @click="DoCreateTask" type="submit" class="btn btn-primary">Create task</button>
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
  	  nameTask: '',
      typeTask: '',
      assign:'',
      status:'Created',
      response:''
  	}
  },
  computed: {
  	printResponse () {
      return this.response
    }
  },
	methods: {
		DoCreateTask () {
	      if (this.nameTask == '' || this.typeTask == '' || this.assign == ''){
	        this.response = 'Debe llenar todos los campos...' 
	        return
	      }
	      userService.createTask('createTask',this.nameTask, this.typeTask, this.assign, this.status)
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