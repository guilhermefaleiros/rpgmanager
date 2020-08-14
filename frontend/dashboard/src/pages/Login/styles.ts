import styled from 'styled-components'
import { GiBrutalHelm } from 'react-icons/gi'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`

export const Banner = styled.img`
  display: none;
  @media (min-width: 801px) {
    display: block;
    max-width: 60%;
  }
`

export const HelmetIcon = styled(GiBrutalHelm)`
  fill: white;
  margin-right: 10px;

  @media (min-width: 600px) {
  }
`

export const LoginSection = styled.div`
  background-color: #64c2b5;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 600px) {
  }
`

export const LoginTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
  justify-content: center;
  align-items: center;

  @media (min-width: 600px) {
  }
`

export const LoginTitlePre = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: #eb5d39;

  @media (min-width: 801px) {
  }
`

export const LoginTitlePos = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: #ffffff;

  @media (min-width: 801px) {
  }
`

export const LoginPaper = styled.div`
  width: 250px;
  height: 250px;
  background-color: #fff;
  border-radius: 10px;

  @media (min-width: 801px) {
    width: 350px;
    height: 350px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 10px black;
    margin-right: 10px;
  }
`
