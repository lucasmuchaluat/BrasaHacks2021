import styled from 'styled-components';

const Wrapper = styled.div`
  width: 905px;
  height: 586px;
  display: flex;
  background-color: white;
`;

const ItemInfo = styled.div`
  padding: 40px 40px 40px 20px;
`;

const Title = styled.h3`
  font-weight: normal;
  font-size: 32px;
  color: #000000;
  margin: 0px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-weight: normal;
  font-size: 14px;
  color: #717786;
  margin: 0px;
  margin-bottom: 30px;
  margin-block-start: 0px;
  margin-block-end: 10px;
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
color: #717786;
margin: 0px;
margin-bottom: 30px;
margin-block-start: 0px;
margin-block-end: 10px;
`;


const Separator = styled.div`
  border: 1px solid #a1a8b3;
  margin: 40px 0px;
`;

export {
  Wrapper,
  ItemInfo,
  Title,
  Description,
  Items,
  ItemQ,
  Separator,
};