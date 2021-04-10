import { logFormData } from '../../utils/index'

const submitButton = document.querySelector('.settings__button')

if (submitButton) {
  submitButton.addEventListener('click', () => {
    logFormData('.settings__list-item', '.chat-input')
  })
}
