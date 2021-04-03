import {
  CardContainer,
  ItemPicture,
  ItemInfo,
  Title,
  Price,
  Comission,
} from './styles';

const calculateComission = (pct, min, price) => {
  const percentage = (pct * 100).toFixed(2);
  const profit = (price * min * pct).toFixed(2);

  return (
    `${percentage}% comission per ${min}x items 
    OR
    R$ ${profit} per ${min}x items`
  )

}

const ItemCard = (props) => {
  return (
    <CardContainer onClick={props.quantity > 0 ? props.onClick : null}>
      <ItemPicture src={props.img}/>
      <ItemInfo>
        <Title>{props.name}</Title>
        <Price>{`R$ ${props.price}`}</Price>
        <Comission>{ calculateComission(props.comission, props.minimum, props.price)}</Comission>
      </ItemInfo>
    </CardContainer>
    
  );
}

export default ItemCard;
export { calculateComission };