import { SaveMessageRepository } from '../../../data/protocols/save-message-repository'
import { MessageDTO } from '../../../domain/usecases/save-message'
import { Message } from '../../../domain/models/message'
import { MongoHelper } from '../helpers/mongo-helper'

export class MessageMongoRepository implements SaveMessageRepository {
  async save(messageDTO: MessageDTO): Promise<Message> {
    const messageCollection = await MongoHelper.getCollection('messages')
    const message = await messageCollection.insertOne(messageDTO)
    return MongoHelper.map(message.ops[0])
  }
}
