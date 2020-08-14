export interface MessageDTO {
  text: string
  author: string
  roomId: string
}

export interface SaveMessage {
  save(message: MessageDTO)
}
