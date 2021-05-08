enum MessageTypes {
  MESSAGE = 'message',
  GET_OLD = 'get old',
  FILE = 'file',
  STICKER = 'sticker'
}

type MessageType = typeof MessageTypes[keyof typeof MessageTypes]

export {
  MessageTypes,
  MessageType,
}
