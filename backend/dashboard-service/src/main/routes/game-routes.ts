import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route.adapter'
import { makeGameController } from '../factories/game/game-controller-factory'

export default (router: Router) => {
  router.post('/game', adaptRoute(makeGameController()))
}
