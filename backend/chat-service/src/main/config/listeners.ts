import { makeSendMessageListener } from '../factories/send-message-listener-factory'

const SEND_MESSAGE_QUEUE = 'sendMessage'

export default async (io: SocketIO.Server) => {
  const sendMessageListener = makeSendMessageListener()
  io.on('connection', async (socket: SocketIO.Socket) => {
    socket.on('joinRoom', ({ room }) => {
      socket.join(room)
    })
    await sendMessageListener.handle(socket, io, SEND_MESSAGE_QUEUE)
  })
}
