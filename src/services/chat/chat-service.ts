/* eslint-disable no-console */
import { Chat } from '../../api/index'
import { MessageType, MessageTypes } from './types'

class ChatService {
  private baseURL = 'wss://ya-praktikum.tech/ws/chats'

  userId: number

  chatId: number

  socket: WebSocket | undefined

  url: string

  constructor(
    userId: number,
    chatId: number,
  ) {
    this.userId = userId
    this.chatId = chatId
  }

  private onOpen = (): void => {
    console.log('Connect successful!')
  }

  private onMessage = (event: MessageEvent & { data: string }): void => {
    try {
      console.log('get data:', event.data)
      const data = JSON.parse(event.data)
      // need message service here
      console.log(data)
    } catch (error) {
      console.log(error.message)
    }
  }

  private onClose = (event: CloseEvent): void => {
    console.log(`Code: ${event.code} | Reason: ${event.reason}`)
    if (event.wasClean) {
      console.log('Connection close OK')
    } else {
      console.log('Connection error')
    }
  }

  private onError = (event: ErrorEvent): void => {
    console.log('Error', event.message)
  }

  private initSocketListeners(): void {
    if (this.socket) {
      this.socket.addEventListener('close', this.onClose)
      this.socket.addEventListener('open', this.onOpen)
      this.socket.addEventListener('message', this.onMessage)
      this.socket.addEventListener('error', this.onError)
    }
  }

  async init(): Promise<void> {
    try {
      if (this.socket) {
        this.destroy()
      }

      const token =
        (await Chat.getChatToken(
          this.chatId,
        ) as unknown as { token: string }).token

      this.url = `${this.baseURL}/${this.userId}/${this.chatId}/${token}`

      this.socket = new WebSocket(this.url)

      this.initSocketListeners()
    } catch (error) {
      console.log('error', error)
    }
  }

  private sendSocketMessage(
    message: string,
    type: MessageType = MessageTypes.MESSAGE,
  ): void {
    this.socket?.send(
      JSON.stringify({
        'content': message,
        type,
      }),
    )
  }

  async send(
    message: string,
    type: MessageType = MessageTypes.MESSAGE,
  ): Promise<void> {
    try {
      if (this.socket?.readyState === 1) {
        this.sendSocketMessage(message, type)
      }
    } catch (error) {
      console.log('Send message error', error)
    }
  }

  async getMessages(lastMessageNum = 0): Promise<void> {
    try {
      await this.send(lastMessageNum.toString(), MessageTypes.GET_OLD)
    } catch (error) {
      console.log('Send error', error)
    }
  }

  close(reason = 'Deleted'): void {
    if (this.socket) {
      this.socket.close(1000, reason)
      this.destroy()
    }
  }

  destroy(): void {
    if (this.socket) {
      this.socket.removeEventListener('open', this.onOpen)
      this.socket.removeEventListener('close', this.onClose)
      this.socket.removeEventListener('message', this.onMessage)
      this.socket.removeEventListener('error', this.onError)
      this.socket = undefined
    }
  }
}

export {
  ChatService,
}
