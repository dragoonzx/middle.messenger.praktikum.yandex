import { logFormData } from '../../../utils/index'

const form = document.querySelector('.form')

if (form) {
  form.addEventListener('submit', () => {
    logFormData()
  })
}
