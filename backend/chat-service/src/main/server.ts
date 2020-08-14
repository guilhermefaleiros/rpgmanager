import app from './config/app'
import env from './config/env'
import { MongoHelper } from '../infra/mongodb/helpers/mongo-helper'

MongoHelper.connect(env.mongoUrl)
  .then(async () => {
    app.listen(env.port, () =>
      console.log(`[x] Chat Service running on ${env.port}`)
    )
  })
  .catch(console.error)
