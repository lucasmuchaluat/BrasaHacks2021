import styled from 'styled-components';

const CardContainer = styled.div`
  width: 320px;
  height: 156px;
  display: flex;
  margin-bottom: 70px;

  &:hover {
    cursor: pointer;
  }
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

const Comission = styled.p`
  font-size: 13px;
  color: #a1a8b3;
`;


export { CardContainer, ItemPicture, ItemInfo, Title, Price, Comission };