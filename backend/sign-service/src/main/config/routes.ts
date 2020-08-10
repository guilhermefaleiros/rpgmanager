import { Express, Router } from 'express'
import setSignUpRoutes from '../routes/signup-routes'
import setLoginRoutes from '../routes/login-routes'

export default (app: Express): void => {
  const router = Router()
  setSignUpRoutes(router)
  setLoginRoutes(router)
  app.use('/sign/api/v1', router)
}
