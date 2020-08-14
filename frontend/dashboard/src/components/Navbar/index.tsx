import React from 'react'

import * as S from './styles'

interface Props {
  expandSidebar: Function
}

const Navbar: React.FC<Props> = ({ expandSidebar }) => {
  return (
    <S.Container>
      <S.ContainerMenuIcon onClick={() => expandSidebar()}>
        <S.MenuIcon size={35} />
      </S.ContainerMenuIcon>
      <S.ContainerTitle>
        <S.TitlePre>RPG</S.TitlePre>
        <S.TitlePos>Manager</S.TitlePos>
      </S.ContainerTitle>
    </S.Container>
  )
}

export default Navbar
