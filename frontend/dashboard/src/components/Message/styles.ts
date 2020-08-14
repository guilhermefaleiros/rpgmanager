import styled from 'styled-components'

export const Container = styled.div<{ activated: boolean }>`
  display: flex;
  width: 100%;
  min-height: 50px;
  background-color: ${(props) =>
    props.activated ? 'rgba(255,255,255,0.7)' : '#fff'};
  border-radius: ${(props) =>
    props.activated ? '10px 0px 10px 10px' : '0px 10px 10px 10px'};
  flex-direction: column;
  padding: 8px;
  margin-top: 10px;
  overflow-x: hidden;

  animation: send-message-animation 0.3s ease-in forwards;

  @-webkit-keyframes send-message-animation {
    from {
      -webkit-transform: translateX(150%);
    }
    to {
      -webkit-transform: translateX(0);
    }
  }

  /* Standard syntax */
  @keyframes send-message-animation {
    from {
      transform: translateX(150%);
    }
    to {
      transform: translateX(0);
    }
  }
`

export const Name = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: #f24423;
`

export const Body = styled.p`
  font-size: 17px;
  margin-top: 3px;
  color: #000;
  overflow: hidden;
`
