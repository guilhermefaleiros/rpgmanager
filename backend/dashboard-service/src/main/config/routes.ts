import { Router, Express } from 'express'
import setupGameRoutes from '../routes/game-routes'

export default (app: Express): void => {
  const router = Router()
  setupGameRoutes(router)
  app.use('/dashboard/api/v1', router)
}
