import styled from 'styled-components'

import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineSetting } from 'react-icons/ai'
import { GiSwordman } from 'react-icons/gi'
import { AiFillWechat } from 'react-icons/ai'

export const HomeIcon = styled(AiOutlineHome)`
  fill: white;
`

export const ChatIcon = styled(AiFillWechat)`
  fill: white;
`

export const PlayersIcon = styled(GiSwordman)`
  fill: white;
`

export const SettingsIcon = styled(AiOutlineSetting)`
  fill: white;
`

export const Sidebar = styled.div<{ activated: boolean }>`
  height: 100%;

  width: ${(props) => (props.activated ? '180' : '80')}px;
  background-color: #272b2e;
  display: flex;
  align-items: flex-start;
  transition: 0.5s;
  flex-direction: column;
`
