import { HTTPTransport } from '../services/api/index'
import { SignInDataType, SignUpDataType } from './types'

const http = new HTTPTransport()

async function getUserInfo(): Promise<string> {
  return http.get('/auth/user')
}

async function signIn(data: SignInDataType): Promise<string> {
  return http.post('/auth/signin', { data })
}

async function signUp(data: SignUpDataType): Promise<string> {
  return http.post('/auth/signup', { data })
}

async function logout(): Promise<string> {
  return http.post('/auth/logout')
}

const Auth = {
  getUserInfo,
  signIn,
  signUp,
  logout,
}

export {
  Auth,
}
