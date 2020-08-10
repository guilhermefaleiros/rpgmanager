import { Controller } from '../../../presentation/protocols/controller'
import { GameMongoRepository } from '../../../infra/mongodb/game/game-mongo-repository'
import { AddGameImpl } from '../../../data/usecases/add-game'
import { AddGameController } from '../../../presentation/controllers/add-game/add-game-controller'

export const makeGameController = (): Controller => {
  const addGameRepository = new GameMongoRepository()
  const addGameImpl = new AddGameImpl(addGameRepository)
  const addGameController = new AddGameController(addGameImpl)
  return addGameController
}
