import { HTTPTransport } from '../services/api/index'
import { ChatType } from './types'

const http = new HTTPTransport()

async function getChats(): Promise<ChatType[]> {
  return http.get('/chats', {
    'data': {
      'limit': 20,
    },
  })
}

async function getChatToken(id: number): Promise<string> {
  return http.post(`/chats/token/${id}`)
}

async function createChat(title: string): Promise<string> {
  return http.post('/chats', {
    'data': {
      title,
    },
  })
}

async function deleteChat(chatId: number): Promise<string> {
  return http.delete('/chats', {
    'data': {
      chatId,
    },
  })
}

async function addUsersToChat(
  users: number[],
  chatId: number,
): Promise<string> {
  return http.put('/chats/users', {
    'data': {
      users,
      chatId,
    },
  })
}

async function deleteUsersFromChat(
  users: number[],
  chatId: number,
): Promise<string> {
  return http.delete('/chats/users', {
    'data': {
      users,
      chatId,
    },
  })
}

const Chat = {
  getChats,
  getChatToken,
  createChat,
  deleteChat,
  addUsersToChat,
  deleteUsersFromChat,
}

export {
  Chat,
}
