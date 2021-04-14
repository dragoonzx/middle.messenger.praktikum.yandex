import { logFormData, validationInitializer } from '../../../utils/index'

window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form') as HTMLFormElement

  validationInitializer(
    form,
    '.chat-input',
  )

  if (form) {
    form.addEventListener('submit', () => {
      logFormData('.settings__list-item', '.chat-input')
    })
  }
})
