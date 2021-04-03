import styled from 'styled-components';

const SearchBox = styled.input`
  border: 1px solid #000000;
  border-radius: 10px;
  width: 663px;
  height: 44px;
  outline: none;
  padding: 0px 24px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
`;

const SubmitButton = styled.button`
  float: left;
  width: 20%;
  padding: 10px;
  background: #2196f3;
  color: white;
  font-size: 17px;
  border: 1px solid grey;
  border-left: none; /* Prevent double borders */
  cursor: pointer;
`;


export { SearchBox, SubmitButton };