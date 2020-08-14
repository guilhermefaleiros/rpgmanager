import React from 'react'

import * as S from './styles'

interface Props {
  title: string
  onClick: Function
  id: number
}

const MessageItemMobile: React.FC<Props> = ({ id, title, onClick }) => {
  return (
    <div onClick={() => onClick(id, title)}>
      <S.MobileWrapper>
        <S.Container>
          <S.Title>{title}</S.Title>
          <S.LastMessage>adadadada</S.LastMessage>
        </S.Container>
      </S.MobileWrapper>
    </div>
  )
}

export default MessageItemMobile
