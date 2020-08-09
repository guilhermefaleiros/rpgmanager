import { AccountMongoRepository } from './account-mongo-repository'
import { MongoHelper } from '../helpers/mongo-helper'
import { Role } from '../../../domain/models/account'

let accountCollection

describe('AccountMongoRepository', () => {
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

  const makeSut = (): AccountMongoRepository => {
    return new AccountMongoRepository()
  }

  test('add()', async () => {
    const sut = makeSut()
    const addAccountDTO = {
      name: 'any_name',
      email: 'any_email@mail.com',
      password: 'hashed_password',
      display: 'any_display',
      role: [Role.PLAYER],
    }
    const account = await sut.add(addAccountDTO)
    expect(account).toBeTruthy()
    expect(account.id).toBeTruthy()
    expect(account.name).toBe(addAccountDTO.name)
    expect(account.email).toBe(addAccountDTO.email)
    expect(account.display).toBe(addAccountDTO.display)
    expect(account.password).toBe(addAccountDTO.password)
    expect(account.role).toBe(addAccountDTO.role)
  })

  test('loadByEmail()', async () => {
    const sut = makeSut()
    const addAccountDTO = {
      name: 'any_name',
      email: 'any_email@mail.com',
      password: 'hashed_password',
      display: 'any_display',
      role: [Role.PLAYER],
    }
    await accountCollection.insertOne(addAccountDTO)
    const account = await sut.loadByEmail('any_email@mail.com')
    expect(account).toBeTruthy()
    expect(account.id).toBeTruthy()
    expect(account.name).toBe(addAccountDTO.name)
    expect(account.email).toBe(addAccountDTO.email)
    expect(account.display).toBe(addAccountDTO.display)
    expect(account.password).toBe(addAccountDTO.password)
    expect(account.role).toBeTruthy()
  })
})
