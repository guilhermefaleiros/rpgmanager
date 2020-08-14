import { Listener } from '../protocols/listener'
import { SaveMessage } from '../../domain/usecases/save-message'

export class SendMessageListener implements Listener {
  constructor(private readonly saveMessage: SaveMessage) {}

  makeMessage(username: string, message: string) {
    return {
      username,
      message,
    }
  }

  async handle(
    socket: SocketIO.Socket,
    io: SocketIO.Server,
    topic: string
  ): Promise<void> {
    socket.on(topic, async ({ room, message, username }) => {
      try {
        const savedMessage = await this.saveMessage.save({
          roomId: room,
          text: message,
          author: username,
        })
        console.log(savedMessage)
        if (savedMessage) {
          io.to(room).emit('chatMessage', this.makeMessage(username, message))
        } else {
          io.to(room).emit('chatMessage', {
            username,
            message: 'Não foi possível enviar esta mensagem!',
            error: true,
          })
        }
      } catch (e) {
        console.log(e)
        io.to(room).emit('chatMessage', {
          username,
          message: 'Não foi possível enviar esta mensagem!',
          error: true,
        })
      }
    })
  }
}
