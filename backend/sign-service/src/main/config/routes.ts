import { Express, Router } from 'express'
import setSignUpRoutes from '../routes/signup-routes'

export default (app: Express): void => {
  const router = Router()
  setSignUpRoutes(router)
  app.use('/sign/api/v1', router)
}
