import { Controller } from '../../../presentation/protocols/controller'
import { AccountMongoRepository } from '../../../infra/mongodb/account/account-mongo-repository'
import { BcryptAdapter } from '../../../infra/cryptography/bcrypt-adapter'
import { JwtAdapter } from '../../../infra/cryptography/jwt-adapter'
import { AuthenticationImpl } from '../../../data/usecases/login/login'
import { LoginController } from '../../../presentation/controllers/login-controller/login-controller'
import env from '../../config/env'

export const makeLoginController = (): Controller => {
  const loadAccountByEmailRepository = new AccountMongoRepository()
  const hasher = new BcryptAdapter(12)
  const encrypter = new JwtAdapter(env.jwtSecret)
  const authenticationImpl = new AuthenticationImpl(
    loadAccountByEmailRepository,
    hasher,
    encrypter
  )
  const loginController = new LoginController(authenticationImpl)
  return loginController
}
