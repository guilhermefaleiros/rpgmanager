import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 5px;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  padding: 5px;
`

export const Title = styled.span`
  font-size: 17px;
  font-weight: bold;
  opacity: 0.7;
  color: #fff;
`

export const LastMessage = styled.span`
  margin-top: 3px;
  margin-bottom: 3px;
  font-size: 13px;
  max-width: 100%;
  color: #fff;
`

export const MobileWrapper = styled.div`
  @media (min-width: 800px) {
    display: none;
  }
`

export const WebWrapper = styled.div`
  display: none;
  @media (min-width: 800px) {
    display: block;
  }
`
