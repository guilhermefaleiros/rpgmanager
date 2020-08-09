import { Controller } from '../../../presentation/protocols/controller'
import { AddAccountImpl } from '../../../data/usecases/add-account/add-account'
import { EmailValidator } from '../../../presentation/validators/email-validator'
import { AddAccountController } from '../../../presentation/controllers/add-account-controller/add-account-controller'
import { AccountMongoRepository } from '../../../infra/mongodb/account/account-mongo-repository'
import { BcryptAdapter } from '../../../infra/cryptography/bcrypt-adapter'

export const makeSignUpController = (): Controller => {
  const loadAccountByEmailRepository = new AccountMongoRepository()
  const addAccountRepository = new AccountMongoRepository()
  const hasher = new BcryptAdapter(12)
  const addAccountImpl = new AddAccountImpl(
    loadAccountByEmailRepository,
    hasher,
    addAccountRepository
  )
  const emailValidator = new EmailValidator()
  const signUpController = new AddAccountController(
    emailValidator,
    addAccountImpl
  )
  return signUpController
}
