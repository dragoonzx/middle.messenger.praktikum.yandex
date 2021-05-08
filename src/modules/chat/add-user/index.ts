import { logFormData } from '../../../utils/index'

const initAddUser = (): void => {
  const form = document.querySelector('.form')

  if (form) {
    form.addEventListener('submit', () => {
      logFormData()
    })
  }
}

export {
  initAddUser,
}
