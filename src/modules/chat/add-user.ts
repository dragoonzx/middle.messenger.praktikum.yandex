import { logFormData } from '../../utils/index'

const submitButton = document.querySelector('.popup__button')

if (submitButton) {
  submitButton.addEventListener('click', () => {
    logFormData()
  })
}
