const express = require('express')
const httpProxy = require('express-http-proxy')
const app = express()

// const { SIGN_SERVER } = require('./env')
const SIGN_SERVER = 'http://localhost:3001'
const DASHBOARD_SERVER = 'http://localhost:3002'

const signServiceProxy = httpProxy(SIGN_SERVER)
const dashboardServiceProxy = httpProxy(DASHBOARD_SERVER)

app.post('/sign/api/v1/signup', (req, res, next) =>
  signServiceProxy(req, res, next)
)

app.post('/sign/api/v1/login', (req, res, next) =>
  signServiceProxy(req, res, next)
)

app.post('/dashboard/api/v1/game', (req, res, next) =>
  dashboardServiceProxy(req, res, next)
)

module.exports = app
