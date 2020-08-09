import { Collection } from 'mongodb'
import request from 'supertest'
import { MongoHelper } from '../../infra/mongodb/helpers/mongo-helper'
import app from '../config/app'

let accountCollection: Collection

describe('Login Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('POST /signup', () => {
    test('Should return 200 on signup', async () => {
      await request(app)
        .post('/api/v1/signup')
        .send({
          name: 'Guilherme',
          email: 'guilhermefaleiros2000@gmail.com',
          password: 'gui2000',
          passwordConfirmation: 'gui2000',
          display: 'guifaleiros',
        })
        .expect(200)
      await request(app)
        .post('/api/v1/signup')
        .send({
          name: 'Guilherme',
          email: 'guilhermefaleiros2000@gmail.com',
          password: 'gui2000',
          passwordConfirmation: 'gui2000',
          display: 'guifaleiros',
        })
        .expect(403)
    })
  })
})
