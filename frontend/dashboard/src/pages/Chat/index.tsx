import React, { useState } from 'react'

import MessageItemMobile from '../../components/MessageItemMobile/'
import MessageGroup from './Group'

import * as S from './styles'

const Chat: React.FC = () => {
  const [username, setUsername] = useState('')
  const [groupMode, setGroupMode] = useState(false)
  const [currentGroup, setCurrentGroup] = useState({
    id: 1,
    title: '',
  })

  const handleNavigate = (id: number, title: string) => {
    setGroupMode(true)
    setCurrentGroup({
      id,
      title,
    })
  }

  return (
    <S.Container>
      {!groupMode && (
        <S.ListMessagesMobile>
          <MessageItemMobile
            id={1}
            title="Grupo do Alexandre"
            onClick={handleNavigate}
          />
          <MessageItemMobile
            onClick={handleNavigate}
            id={2}
            title="Grupo do Faleiros"
          />
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          ></input>
        </S.ListMessagesMobile>
      )}
      {groupMode && (
        <MessageGroup
          username={username}
          title={currentGroup.title}
          id={currentGroup.id}
        />
      )}
    </S.Container>
  )
}

export default Chat
