import React from 'react'

import * as S from './styles'

interface Props {
  label: string
  icon: any
  activated: boolean
}

const SidebarItem: React.FC<Props> = ({ activated, label, icon }) => {
  return (
    <S.Container activated={activated}>
      {icon}
      {activated && <span>{label}</span>}
    </S.Container>
  )
}

export default SidebarItem
