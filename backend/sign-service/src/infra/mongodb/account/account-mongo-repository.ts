import { AddAccountRepository } from '../../../data/protocols/add-account-repository'
import { AddAccountDTO } from '../../../domain/usecases/add-account'
import { MongoHelper } from '../helpers/mongo-helper'
import { LoadAccountByEmailRepository } from '../../../data/protocols/load-account-by-email-repository'
import { Account } from '../../../domain/models/account'

export class AccountMongoRepository
  implements AddAccountRepository, LoadAccountByEmailRepository {
  async add(data: AddAccountDTO): Promise<Account> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(data)
    return MongoHelper.map(result.ops[0])
  }

  async loadByEmail(email: string): Promise<Account> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const account = await accountCollection.findOne({ email })
    return account && MongoHelper.map(account)
  }
}
