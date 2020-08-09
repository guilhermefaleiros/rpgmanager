import { Controller } from '../../protocols/controller'
import { AddAccountController } from './add-account-controller'
import { Validation } from '../../protocols/validation'
import { badRequest, serverError } from '../../helpers/http-helper'
import { InvalidParamError } from '../../errors/invalid-param-error'
import { MissingParamError } from '../../errors/missing-param.error'
import { AddAccount, AddAccountDTO } from '../../../domain/usecases/add-account'
import { Account, Role } from '../../../domain/models/account'
import { HttpRequest } from '../../protocols/http'

interface SutTypes {
  sut: Controller
  emailValidatorStub: Validation
  addAccountStub: AddAccount
}

const makeFakeRequest = (): HttpRequest => {
  return {
    body: {
      name: 'valid_name',
      email: 'valid_mail@mail.com',
      password: 'valid_password',
      passwordConfirmation: 'valid_password',
      display: 'valid_display',
    },
  }
}

const makeFakeAccount = (): Account => {
  return {
    id: 'valid_id',
    name: 'valid_name',
    email: 'valid_mail@mail.com',
    password: 'valid_password',
    display: 'valid_display',
    role: [Role.PLAYER],
  }
}

const makeEmailValidationStub = (): Validation => {
  class EmailValidatorStub implements Validation {
    validate(body: any) {
      return true
    }
  }

  return new EmailValidatorStub()
}

const makeAddAccountStub = (): AddAccount => {
  class AddAccountStub implements AddAccount {
    async add(account: AddAccountDTO): Promise<Account> {
      return new Promise((resolve) => resolve(makeFakeAccount()))
    }
  }
  return new AddAccountStub()
}

const makeSut = (): SutTypes => {
  const emailValidatorStub = makeEmailValidationStub()
  const addAccountStub = makeAddAccountStub()
  const sut = new AddAccountController(emailValidatorStub, addAccountStub)

  return {
    sut,
    emailValidatorStub,
    addAccountStub,
  }
}

describe('AddAccount Controller', () => {
  test('Should throws if email param is missing', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        name: 'valid_name',
        password: 'valid_password',
        passwordConfirmation: 'valid_password',
        display: 'valid_display',
      },
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(badRequest(new MissingParamError('email')))
  })

  test('Should throws if password param is missing', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        name: 'valid_name',
        email: 'valid_mail@mail.com',
        passwordConfirmation: 'valid_password',
        display: 'valid_display',
      },
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(badRequest(new MissingParamError('password')))
  })

  test('Should throws if passwordConfirmation param is missing', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        name: 'valid_name',
        email: 'valid_mail@mail.com',
        password: 'valid_password',
        display: 'valid_display',
      },
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(
      badRequest(new MissingParamError('passwordConfirmation'))
    )
  })

  test('Should throws if name param is missing', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        password: 'valid_password',
        email: 'valid_mail@mail.com',
        passwordConfirmation: 'valid_password',
        display: 'valid_display',
      },
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(badRequest(new MissingParamError('name')))
  })

  test('Should throws if display param is missing', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        name: 'valid_name',
        email: 'valid_mail@mail.com',
        password: 'valid_password',
        passwordConfirmation: 'valid_password',
      },
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(badRequest(new MissingParamError('display')))
  })

  test('Should call EmailValidator with correct value', async () => {
    const { sut, emailValidatorStub } = makeSut()
    const validateSpy = jest.spyOn(emailValidatorStub, 'validate')
    await sut.handle(makeFakeRequest())

    expect(validateSpy).toHaveBeenCalledWith(makeFakeRequest().body.email)
  })

  test('Should throws if EmailValidator returns false', async () => {
    const { sut, emailValidatorStub } = makeSut()
    jest.spyOn(emailValidatorStub, 'validate').mockImplementationOnce(() => {
      return false
    })

    const httpRequest = {
      body: {
        name: 'valid_name',
        email: 'invalid_mail',
        password: 'valid_password',
        passwordConfirmation: 'valid_password',
        display: 'valid_display',
      },
    }

    const httpResponse = await sut.handle(httpRequest)

    expect(httpResponse).toEqual(badRequest(new InvalidParamError('email')))
  })

  test('Should call AddAccount with correct values', async () => {
    const { addAccountStub, sut } = makeSut()
    const addSpy = jest.spyOn(addAccountStub, 'add')
    const httpRequest = makeFakeRequest()
    await sut.handle(httpRequest)
    expect(addSpy).toHaveBeenCalledWith({
      email: 'valid_mail@mail.com',
      name: 'valid_name',
      password: 'valid_password',
      display: 'valid_display',
    })
  })

  test('Should return an account on success', async () => {
    const { sut } = makeSut()

    const httpRequest = makeFakeRequest()
    const account = await sut.handle(httpRequest)
    expect(account).toEqual({
      statusCode: 200,
      body: {
        id: 'valid_id',
        role: [Role.PLAYER],
        email: 'valid_mail@mail.com',
        name: 'valid_name',
        password: 'valid_password',
        display: 'valid_display',
      },
    })
  })

  test('Should throw if AddAccount throws', async () => {
    const { sut, addAccountStub } = makeSut()
    jest
      .spyOn(addAccountStub, 'add')
      .mockImplementationOnce(
        () => new Promise((resolve, reject) => reject(new Error()))
      )
    const httpResponse = await sut.handle(makeFakeRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })
})
