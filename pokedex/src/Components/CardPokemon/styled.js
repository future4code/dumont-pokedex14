import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: rgb(254, 200, 77, 0.5);
  background-image: url(${(props) => props.backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 20vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 60px;
  margin: 15px;
  div {
    display: flex;
  }
  button {
    margin: 0 0.5vw;
  }
  img {
    height: 20vh;
    align-self: center;
  }
`;
