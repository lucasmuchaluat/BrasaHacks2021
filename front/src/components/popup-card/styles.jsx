import styled from 'styled-components';

const Wrapper = styled.div`
  width: 905px;
  height: 586px;
  display: flex;
  background-color: white;
`;

const ItemPicture = styled.div`
  width: 600px;
  height: 100%;
  background: url(${(props) => props.img} );
  background-position: center;
  margin-right: 10px;
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
  color: #a1a8b3;
  margin: 0px;
  margin-bottom: 30px;
`;

const Price = styled.p`
  font-weight: normal;
  font-size: 23px;
  color: #717786;
  margin: 0px;
  margin-bottom: 8px;
`;

const Comission = styled.p`
  font-weight: normal;
  font-size: 16px;
  color: #a1a8b3;
  margin: 0px;
  width: 40%;
`;

const Separator = styled.div`
  border: 1px solid #a1a8b3;
  margin: 40px 0px;
`;

const Dropdown = styled.select`
  width: 300px;
  height: 40px;
  font-size: 15px;
  padding-left: 15px;
  outline: none;
`;

export {
  Wrapper,
  ItemPicture,
  ItemInfo,
  Title,
  Description,
  Price,
  Comission,
  Separator,
  Dropdown
};