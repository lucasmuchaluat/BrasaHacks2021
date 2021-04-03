import {
  CardContainer,
  ItemPicture,
  ItemInfo,
  Title,
  Price,
} from './styles';



const CatalogCard = (props) => {
  return (
    <CardContainer>
      <ItemPicture src={props.img}/>
      <ItemInfo>
        <Title>{props.name}</Title>
        <Price>{`R$ ${props.price}`}</Price>
      </ItemInfo>
    </CardContainer>
  );
}

export default CatalogCard;