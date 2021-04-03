import {
  CardContainer,
  ItemPicture,
  ItemInfo,
  Description,
  Title,
  ItemQ,
  Items,
  Price,
} from './styles';



const CatalogCard = (props) => {
  const items = props.itemIDs.map((el, i) => <Items key={i} {...el} onClick={() => this.handleClick(el)} />);


  return (
    <CardContainer onClick={props.onClick}>
      <ItemPicture src={props.img}/>
      <ItemInfo>
        <Title>{props.name}</Title>
        <Description>{props.description}</Description>
        <ItemQ>{`${props.itemQuantity}  items`} </ItemQ>
        <Price>{`R$ ${props.price}`}</Price>
      </ItemInfo>
    </CardContainer>
  );
}

export default CatalogCard;