import pug from 'pug'

import { Chat, Auth } from '../../api/index'
import { ChatType } from '../../api/types'
import { initChat } from '../../modules/chat/index'
import { ChatService } from '../../services/chat/index'
import { Block } from '../../services/router/types'
import { initTemplate } from './index.tmpl'

import '../../styles/pages/chat.scss'

const fetchChats = async (): Promise<ChatType[]> => {
  try {
    return await Chat.getChats()
  } catch {
    return []
  }
}

let chatId: number

const initChatService = async (): Promise<ChatService> => {
  const userInfo = await Auth.getUserInfo() as unknown as { id: number }

  const chatService = new ChatService(userInfo.id, chatId)

  chatService.init()
  await chatService.getMessages()

  return chatService
}

const preloadChatData = async (): Promise<{ chat: ChatType | undefined }> => {
  const url = new URL(window.location as unknown as string)
  // eslint-disable-next-line compat/compat
  const params = new URLSearchParams(url.search)
  chatId = Number(params.get('chatId'))
  const chats = await fetchChats()

  const chat = chats.find((
    chatEntity: { id: number },
  ) => chatEntity.id === chatId)

  if (chat?.last_message) {
    chat.last_message =
      JSON.parse(chat.last_message as unknown as string).content
  }

  return {
    chat,
  }
}

const renderHTML = async (): Promise<string> => {
  const tmpl = await initTemplate()

  const { chat } = await preloadChatData()

  if (!chat) {
    return pug.render(tmpl)
  }

  return pug.render(tmpl, {
    chat,
  })
}

class ChatOpen implements Block {
  template: Promise<string> = renderHTML()

  async init(): Promise<void> {
    const chatService = await initChatService()
    initChat(chatService)
  }
}

export {
  ChatOpen,
}
