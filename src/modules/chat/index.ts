import { ChatService } from 'services/chat/chat-service'

import { router } from '../../services/router/index'
import { logChatFormData } from './chat'

const initChat = (chatService?: ChatService):void => {
  const form = document.querySelector('.message__form') as HTMLFormElement

  if (form) {
    form.addEventListener('submit', () => {
      logChatFormData()
      if (chatService) {
        const formData = new FormData(form)
        const message = formData.get('message') as string
        chatService.send(message)
      }
    })
  }

  const chats = document.querySelectorAll('[data-id]')
  for (const chat of chats) {
    chat?.addEventListener('click', (event) => {
      event.preventDefault()
      const chatId = (event.currentTarget as HTMLElement).dataset?.id

      if (!chatId) {
        return
      }

      const url = new URL(window.location as unknown as string)
      // eslint-disable-next-line compat/compat
      const params = new URLSearchParams(url.search)
      params.set('chatId', chatId)

      router.go(`/chat-open?chatId=${chatId}`)
    })
  }
}

export {
  initChat,
}
