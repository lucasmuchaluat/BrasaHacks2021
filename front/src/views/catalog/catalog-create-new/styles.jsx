import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 550px;
  height: 270px;
  padding: 30px;
  background-color: white;
  flex-direction: column;
`;

const Title = styled.h3`
  margin: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  color: #f71963;
`;

const Subtitle = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  color: #717786;
`;

const SearchBox = styled.input`
  border: 1px solid #000000;
  border-radius: 10px;
  width: 340px;
  height: 44px;
  outline: none;
  padding: 0px 24px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
`;

export { Wrapper, Title, Subtitle, SearchBox };