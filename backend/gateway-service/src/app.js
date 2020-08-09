const express = require('express')
const httpProxy = require('express-http-proxy')
const app = express()

// const { SIGN_SERVER } = require('./env')
const SIGN_SERVER = 'http://localhost:3001'

const signServiceProxy = httpProxy(SIGN_SERVER)

app.post('/sign/api/v1/signup', (req, res, next) =>
  signServiceProxy(req, res, next)
)

module.exports = app
