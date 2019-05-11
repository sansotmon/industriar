import trae from 'trae'
import configService from './config'

const loginService = trae.create({
	baseUrl:configService.apiUrl
})

export default loginService