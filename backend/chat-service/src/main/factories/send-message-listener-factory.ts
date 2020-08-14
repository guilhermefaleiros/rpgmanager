import { Listener } from '../../presentation/protocols/listener'
import { MessageMongoRepository } from '../../infra/mongodb/message/message-mongo-repository'
import { SaveMessageImpl } from '../../data/usecases/save-message'
import { SendMessageListener } from '../../presentation/listeners/send-message-listener'

export const makeSendMessageListener = (): Listener => {
  const messageMongoRepository = new MessageMongoRepository()
  const saveMessageRepository = new SaveMessageImpl(messageMongoRepository)
  const sendMessageListener = new SendMessageListener(saveMessageRepository)

  return sendMessageListener
}
