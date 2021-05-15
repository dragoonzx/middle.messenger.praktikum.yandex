type SignInDataType = {
  password: string | null
  login: string | null
}

type SignUpDataType = {
  'first_name': string | null
  'second_name': string | null
  login: string | null
  email: string | null
  password: string | null
  phone: string | null
}

type ChatType = {
  id: number
  title: string
  avatar: string
  'unread_count': number
  'last_message': {
    user: {
      'first_name': string
      'second_name': string
      'avatar': string
      'email': string
      'login': string
      'phone': string
    }
    time: string
    // eslint-disable-next-line id-blacklist
    content: string
  }
}

export {
  SignInDataType,
  SignUpDataType,
  ChatType,
}
