import { logFormData } from '../../utils/index'

const submitButton = document.querySelector('.form__button')

if (submitButton) {
  submitButton.addEventListener('click', () => {
    logFormData()
  })
}
