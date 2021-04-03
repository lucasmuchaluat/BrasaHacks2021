import styled from 'styled-components'

const Container = styled.div`
  height: 80vh;
  background-color: #fff3f6;
  min-width: 180px;
  padding: 80px 20px 0px 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  .btn {
    text-decoration: none;
    font-size: 22px;
    font-weight: bold;
    color: #000000;
    margin: 10px 0px;
  }

  .active {
    background-color: #f71963;
    color: #ffffff;
  }
`;

export { Container };