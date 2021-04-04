import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const ListOfItems = styled.div`
  margin-top: 70px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export { Wrapper, ListOfItems };