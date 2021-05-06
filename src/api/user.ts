import { HTTPTransport } from '../services/api/index'
import { SignUpDataType } from './types'

const http = new HTTPTransport()

async function changeProfile(
  data: SignUpDataType & { 'display_name': string},
): Promise<string> {
  return http.put('/user/profile', { data })
}

async function changeAvatar(
  avatar: FormDataEntryValue,
): Promise<string> {
  return http.put('/user/profile/avatar', {
    'data': {
      avatar,
    },
  })
}

async function changePassword(
  data: {
    oldPassword: string
    newPassword: string
  },
): Promise<string> {
  return http.put('/user/password', { data })
}

const User = {
  changeProfile,
  changeAvatar,
  changePassword,
}

export {
  User,
}
