import loginService from './login-service'

const userService = {}

userService.login = function (q, username, password) {

	return loginService.get('',{
		params: { q, username , password }
	})
	.then(res => res.data) 

}

userService.register = function (q, name, username, password) {

	return loginService.get('',{
		params: { q, name, username , password }
	})
	.then(res => res.data) 

}

export default userService