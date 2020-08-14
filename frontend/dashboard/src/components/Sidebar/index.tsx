import React, { useState } from 'react'
import SidebarItem from '../SidebarItem'

import * as S from './styles'

interface Props {
  activated: boolean
  expandSidebar: Function
}

const Sidebar: React.FC<Props> = ({ activated }) => {
  const [localActive, setLocalActive] = useState(false)

  return (
    <S.Sidebar
      onMouseEnter={() => setLocalActive(!localActive)}
      onMouseLeave={() => setLocalActive(!localActive)}
      activated={activated || localActive}
    >
      <SidebarItem
        activated={activated || localActive}
        icon={<S.HomeIcon size={35}></S.HomeIcon>}
        label="Home"
      />
      <SidebarItem
        activated={activated || localActive}
        icon={<S.ChatIcon size={35}></S.ChatIcon>}
        label="Conversas"
      />
      <SidebarItem
        activated={activated || localActive}
        icon={<S.SettingsIcon size={35}></S.SettingsIcon>}
        label="Configurações"
      />
      <SidebarItem
        activated={activated || localActive}
        icon={<S.PlayersIcon size={35}></S.PlayersIcon>}
        label="Seus RPGs"
      />
    </S.Sidebar>
  )
}

export default Sidebar
