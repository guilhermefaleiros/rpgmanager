import { Controller } from '../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../protocols/http'
import { serverError, ok, badRequest } from '../../helpers/http-helper'
import { AddGame } from '../../../domain/usecases/add-game'

export class AddGameController implements Controller {
  constructor(private readonly addGame: AddGame) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const gameDTO = {
        name: httpRequest.body.name,
        lore: httpRequest.body.lore,
        master: httpRequest.body.master,
        attributes: httpRequest.body.attributes,
        items: httpRequest.body.items,
        classes: httpRequest.body.classes,
        players: [],
      }
      const game = await this.addGame.add(gameDTO)
      if (game) {
        return ok(game)
      }
      return badRequest(new Error('Error'))
    } catch (e) {
      return serverError(e)
    }
  }
}
