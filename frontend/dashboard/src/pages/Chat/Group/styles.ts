import styled from 'styled-components'

import { AiOutlineSend } from 'react-icons/ai'

export const Container = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Header = styled.div`
  width: 100%;
  min-height: 60px;
  border-bottom: 1px solid #fff;
  display: flex;
  padding: 10px;
  flex-direction: row;
  align-items: center;
`

export const Logo = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 20px;
`

export const ContainerTextHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  padding: 5px;
`

export const Name = styled.span`
  margin-top: 5px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`

export const Subtitle = styled.span`
  font-size: 14px;
  color: #fff;
  margin-bottom: 5px;
`

export const Content = styled.div`
  flex: 6;
  padding: 15px;
  min-height: 70%;
  overflow-y: scroll;
  overflow-x: none;
`

export const InputArea = styled.div`
  background-color: #fff;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  z-index: 9999;
`

export const ButtonSend = styled(AiOutlineSend)`
  fill: #000;
  margin-left: 10px;
`

export const Input = styled.input`
  width: 70%;
  height: 40px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`
