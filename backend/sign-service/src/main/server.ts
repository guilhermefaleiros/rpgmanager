import env from './config/env'
import { MongoHelper } from '../infra/mongodb/helpers/mongo-helper'
import app from './config/app'

MongoHelper.connect(env.mongoUrl)
  .then(async () => {
    app.listen(env.port, () =>
      console.log(`[x] Sign Service running on ${env.port}`)
    )
  })
  .catch(console.error)
