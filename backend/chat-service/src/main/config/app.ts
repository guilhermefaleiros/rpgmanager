import express from 'express'
import http from 'http'
import socketIO from 'socket.io'

import setupListeners from './listeners'

const app = express()

//Setups
const server = http.createServer(app)
const io: SocketIO.Server = socketIO(server)
setupListeners(io)
  .then(() => console.log('saved'))
  .catch(console.log)
export default server
