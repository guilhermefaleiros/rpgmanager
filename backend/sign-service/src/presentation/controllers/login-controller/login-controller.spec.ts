import { Controller } from '../../protocols/controller'
import { LoginController } from './login-controller'
import { badRequest, unauthorized, ok } from '../../helpers/http-helper'
import { MissingParamError } from '../../errors/missing-param.error'
import {
  Authentication,
  AuthenticationDTO,
} from '../../../domain/usecases/authentication'
import { AuthenticationModel } from '../../../domain/models/authentication'

interface SutTypes {
  sut: Controller
  authenticationStub: Authentication
}

const makeAuthentication = (): Authentication => {
  class AuthenticationStub implements Authentication {
    auth(authDTO: AuthenticationDTO): Promise<AuthenticationModel> {
      return new Promise((resolve) => resolve({ accessToken: 'any_token' }))
    }
  }
  return new AuthenticationStub()
}

const makeSut = (): SutTypes => {
  const authenticationStub = makeAuthentication()
  const sut = new LoginController(authenticationStub)
  return {
    sut,
    authenticationStub,
  }
}

describe('Login Controller', () => {
  test('Should throw if password param is missing', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle({
      body: {
        email: 'guilhermefaleiros@gmail.com',
      },
    })
    expect(httpResponse).toEqual(badRequest(new MissingParamError('password')))
  })

  test('Should throw if email param is missing', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle({
      body: {
        password: 'gui2000',
      },
    })
    expect(httpResponse).toEqual(badRequest(new MissingParamError('email')))
  })

  test('Should call Authentication with correct values', async () => {
    const { sut, authenticationStub } = makeSut()
    const authSpy = jest.spyOn(authenticationStub, 'auth')
    await sut.handle({
      body: {
        email: 'guilhermefaleiros2000@gmail.com',
        password: 'gui2000',
      },
    })
    expect(authSpy).toHaveBeenCalledWith({
      email: 'guilhermefaleiros2000@gmail.com',
      password: 'gui2000',
    })
  })

  test('Should return null if Authentication returns null', async () => {
    const { sut, authenticationStub } = makeSut()
    jest
      .spyOn(authenticationStub, 'auth')
      .mockReturnValueOnce(new Promise((resolve) => resolve(null)))
    const httpResponse = await sut.handle({
      body: {
        email: 'guilhermefaleiros2000@gmail.com',
        password: 'gui2000',
      },
    })
    expect(httpResponse).toEqual(unauthorized())
  })

  test('Should an accessToken on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle({
      body: {
        email: 'guilhermefaleiros2000@gmail.com',
        password: 'gui2000',
      },
    })
    expect(httpResponse).toEqual(ok({ accessToken: 'any_token' }))
  })
})
