import express from 'express'
import setupRoutes from './routes'
import setupMiddlewares from '../middlewares/middlewares'

const app = express()
setupMiddlewares(app)
setupRoutes(app)
export default app
