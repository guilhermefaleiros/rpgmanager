import React from 'react'

import * as S from './styles'

import Image from '../../loginimage.webp'

const Login: React.FC = () => {
  return (
    <S.Container>
      <S.Banner src={Image} />
      <S.LoginSection>
        <S.LoginTitleContainer>
          <S.HelmetIcon size={45} />
          <S.LoginTitlePre>RPG</S.LoginTitlePre>
          <S.LoginTitlePos>MANAGER</S.LoginTitlePos>
        </S.LoginTitleContainer>
        <S.LoginPaper />
      </S.LoginSection>
    </S.Container>
  )
}

export default Login
