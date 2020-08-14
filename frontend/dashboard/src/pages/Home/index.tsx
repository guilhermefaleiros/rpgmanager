import React, { useState } from 'react'

import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'

import Chat from '../../pages/Chat'

import * as S from './styles'

const Home: React.FC = () => {
  const [menuActivated, setMenuActivated] = useState(false)

  const expandSidebar = () => {
    setMenuActivated(!menuActivated)
  }

  return (
    <S.Container>
      <Navbar expandSidebar={expandSidebar} />
      <S.Row>
        <Sidebar expandSidebar={expandSidebar} activated={menuActivated} />
        <Chat />
      </S.Row>
    </S.Container>
  )
}

export default Home
