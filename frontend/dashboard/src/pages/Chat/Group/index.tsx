import React, { useState, useRef, useEffect, MutableRefObject } from 'react'
import io from 'socket.io-client'

import * as S from './styles'
import Message from '../../../components/Message'

const ENDPOINT = 'http://localhost:3004'
const socket = io(ENDPOINT)

interface Props {
  title: string
  id: number
  username: string
}

const AlwaysScrollBottom = () => {
  const elementRef = useRef() as MutableRefObject<HTMLDivElement>
  useEffect(() => elementRef.current.scrollIntoView({ behavior: 'smooth' }))
  return <div ref={elementRef} />
}

interface Message {
  text: string
  author: boolean
  name: string
}

const Group: React.FC<Props> = ({ title, id, username }) => {
  const [messages, setMessages] = useState<Message[]>([])

  const [inputText, setInputText] = useState('')

  console.log(messages)

  useEffect(() => {
    socket.emit('joinRoom', {
      room: id,
    })
    socket.on('chatMessage', (data: any) => {
      console.log(data)
      console.log(username)
      setMessages([
        ...messages,
        {
          text: data.message,
          author: data.username === username ? true : false,
          name: data.username === username ? 'Você' : data.username,
        },
      ])
    })
  }, [messages])

  const handleSubmit = () => {
    socket.emit('sendMessage', {
      message: inputText,
      room: id,
      username,
    })
  }

  return (
    <S.Container>
      <S.Header>
        <S.Logo />
        <S.ContainerTextHeader>
          <S.Name>{title}</S.Name>
          <S.Subtitle>Esse é um RPG muito foda</S.Subtitle>
        </S.ContainerTextHeader>
      </S.Header>

      <S.Content>
        {messages.map((message: Message) => {
          return (
            <Message
              message={message.text}
              isAuthor={message.author}
              name={message.name}
            />
          )
        })}
        <AlwaysScrollBottom />
      </S.Content>

      <S.InputArea>
        <S.Input
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
          type="text"
        />
        <S.ButtonSend
          size={35}
          onClick={() => {
            handleSubmit()
            setInputText('')
          }}
        />
      </S.InputArea>
    </S.Container>
  )
}

export default Group
