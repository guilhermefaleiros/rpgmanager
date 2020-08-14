import styled from 'styled-components'

import { AiOutlineMenu } from 'react-icons/ai'
import { GiBrutalHelm } from 'react-icons/gi'

export const Container = styled.div`
  height: 70px;
  width: 100%;
  background-color: #272b2e;
  border-bottom: 1px solid #fff;
  display: flex;
  flex-direction: row;
`

export const ContainerMenuIcon = styled.div`
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-right: 1px solid #fff;
  cursor: pointer;
`

export const MenuIcon = styled(AiOutlineMenu)`
  fill: #fff;
`

export const ContainerTitle = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 15px;
`

export const TitlePre = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: red;
`
export const TitlePos = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: white;
`
