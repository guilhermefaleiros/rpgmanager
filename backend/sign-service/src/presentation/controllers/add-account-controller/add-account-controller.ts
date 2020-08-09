import { Controller } from '../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../protocols/http'
import { Validation } from '../../protocols/validation'
import {
  badRequest,
  serverError,
  ok,
  forbidden,
} from '../../helpers/http-helper'
import { InvalidParamError } from '../../errors/invalid-param-error'
import { MissingParamError } from '../../errors/missing-param.error'
import { AddAccount } from '../../../domain/usecases/add-account'
import { EmailInUse } from '../../errors/email-in-use.error'

export class AddAccountController implements Controller {
  constructor(
    private readonly emailValidator: Validation,
    private readonly addAccount: AddAccount
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const fields = [
        'email',
        'name',
        'password',
        'passwordConfirmation',
        'display',
      ]

      for (let field of fields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
      const isValidEmail = this.emailValidator.validate(httpRequest.body.email)
      if (!isValidEmail) {
        return badRequest(new InvalidParamError('email'))
      }
      const { email, password, display, name } = httpRequest.body
      const account = await this.addAccount.add({
        email,
        password,
        display,
        name,
      })
      if (!account) {
        return forbidden(new EmailInUse(httpRequest.body.email))
      }
      return ok(account)
    } catch (e) {
      return serverError(e)
    }
  }
}
