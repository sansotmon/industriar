import apiService from './api-service'

const userService = {}

userService.login = function (q, username, password) {

	return apiService.get('',{
		params: { q, username , password }
	})
	.then(res => res.data) 

}

userService.register = function (q, name,email, username, password, type) {

	return apiService.get('',{
		params: { q, name,email, username, password, type}
	})
	.then(res => res.data) 

}

userService.updateTask = function (q, idTask, statusTask) {

	return apiService.get('',{
		params: { q, idTask, statusTask }
	})
	.then(res => res.data) 

}

userService.createTask = function (q, name, type, assign, status) {

	return apiService.get('',{
		params: { q, name, type, assign, status }
	})
	.then(res => res.data) 

}

userService.getTotalTasks = function (q,) {

	return apiService.get('',{
		params: { q }
	})
	.then(res => res.data) 

}

export default userService