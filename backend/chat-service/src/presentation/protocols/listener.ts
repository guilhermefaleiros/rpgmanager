export interface Listener {
  handle(
    socket: SocketIO.Socket,
    io: SocketIO.Server,
    topic: string
  ): Promise<void>
}
