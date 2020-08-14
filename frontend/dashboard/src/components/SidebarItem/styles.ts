import styled from 'styled-components'

export const Container = styled.button<{ activated: boolean }>`
  background: none;
  padding: 10px;
  margin-top: 5px;
  width: 100%;
  outline: none;
  border: none;
  display: flex;
  justify-content: ${(props) => (props.activated ? 'flex-start' : 'center')};
  align-items: center;

  span {
    font-size: 16px;
    color: #fff;
    padding-left: 10px;
  }
`
