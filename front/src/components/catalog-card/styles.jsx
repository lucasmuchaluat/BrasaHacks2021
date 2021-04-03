import styled from 'styled-components';

const CardContainer = styled.div`
  width: 320px;
  height: 156px;
  display: flex;
  margin-bottom: 70px;
  ${'' /* margin-right: 10px; */}
`;

const Description = styled.p`
  font-weight: normal;
  font-size: 14px;
  color: #a1a8b3;
  margin: 0px;
  margin-bottom: 30px;
`;

const ItemPicture = styled.img`
  max-height: 150px;
  max-width: 150px;
  margin-right: 10px;
`;

const ItemInfo = styled.div`
  font-style: normal;
  font-weight: normal;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Items = styled.p`
font-weight: normal;
font-size: 14px;
color: #a1a8b3;
margin: 0px;
margin-bottom: 30px;
`;

const ItemQ = styled.p`
font-weight: normal;
font-size: 14px;
color: #a1a8b3;
margin: 0px;
margin-bottom: 30px;
`;

const Title = styled.h3`
  font-size: 20px;
  margin: 0px;
  font-weight: normal;
  margin-bottom: 4px;
`;

const Price = styled.p`
  font-size: 17px;
  color: #717786;
  margin: 0px;
`;


export { CardContainer, ItemPicture, ItemInfo, Title, Price, Description, ItemQ, Items};