import { logChatFormData } from './chat'

const form = document.querySelector('.message__form')

if (form) {
  form.addEventListener('submit', () => {
    logChatFormData()
  })
}
