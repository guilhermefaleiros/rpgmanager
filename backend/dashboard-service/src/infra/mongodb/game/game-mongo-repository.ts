import { AddGameRepository } from '../../../data/protocols/add-game-repository'
import { GameDTO } from '../../../domain/usecases/add-game'
import { Game } from '../../../domain/models/game'
import { MongoHelper } from '../helpers/mongo-helper'

export class GameMongoRepository implements AddGameRepository {
  async add(data: GameDTO): Promise<Game> {
    const gameCollection = await MongoHelper.getCollection('games')
    const game = await gameCollection.insertOne(data)
    return MongoHelper.map(game.ops[0])
  }
}
