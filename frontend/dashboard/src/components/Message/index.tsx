import React from 'react'

import * as S from './styles'

interface Props {
  isAuthor?: boolean
  name?: string
  message?: string
}

const Message: React.FC<Props> = ({ isAuthor, name, message }) => {
  return (
    <S.Container activated={isAuthor ? isAuthor : false}>
      <S.Name>{name ? name : 'Desconhecido'}</S.Name>
      <S.Body>
        {message ? message : 'Não foi possível carregar esta mensagem'}
      </S.Body>
    </S.Container>
  )
}

export default Message
