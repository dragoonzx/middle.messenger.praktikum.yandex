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

export {
  SignInDataType,
  SignUpDataType,
}
