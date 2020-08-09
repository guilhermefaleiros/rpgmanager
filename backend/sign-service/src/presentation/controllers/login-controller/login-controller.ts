import { Controller } from '../../protocols/controller'
import { HttpResponse, HttpRequest } from '../../protocols/http'
import { badRequest, unauthorized, ok } from '../../helpers/http-helper'
import { MissingParamError } from '../../errors/missing-param.error'
import { Authentication } from '../../../domain/usecases/authentication'

export class LoginController implements Controller {
  constructor(private readonly authentication: Authentication) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const fields = ['email', 'password']
    for (let field of fields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
    const accessToken = await this.authentication.auth(httpRequest.body)
    if (!accessToken) {
      return unauthorized()
    }
    return ok(accessToken)
  }
}
