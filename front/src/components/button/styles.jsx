import styled from 'styled-components';

const Btn = styled.input`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  color: #ffffff;
  border: none;
  cursor: pointer;
  width: 168px;
  height: 46px;
  background: #f71963;
  box-shadow: 0px 4px 10px 0.5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  &:active {
    outline: none;
  }

  &:disabled {
    background: grey;
  }
`;

const Wrapper = styled.div`
  margin: 20px;
  margin-left: 0px;
`;


export {Btn, Wrapper}