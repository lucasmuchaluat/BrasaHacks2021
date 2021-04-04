import styled from 'styled-components';

const CatName = styled.h3`

  margin-top: 45px;
  margin-left: 30px;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  margin-block-end: 5px;
`;

const CardContainer = styled.div`
  display: flex;
  width: 828px;
  height: 159px;
  left: calc(50% - 828px/2 - 7px);
  top: calc(50% - 159px/2 + 331px);

  background: #FFFFFF;
  box-shadow: 0px 0px 50px 0.5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-bottom: 50px;
`;

const Items = styled.p`
  font-weight: normal;
  font-size: 14px;
  color: #a1a8b3;
`;

const ItemQ = styled.p`

  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  margin-left: 30px;
  color: #717786;
  margin-block-start: 0px;
  margin-block-end: 0px;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  left-margin: 30px;
`;



export { CatName, CardContainer, ItemQ, Items, ItemInfo};