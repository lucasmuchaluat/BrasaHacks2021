import {
  CardContainer,
  ItemPicture,
  ItemInfo,
  Title,
  Price,
  Comission,
} from './styles';

const calculateComission = (pct, min, price) => {
  const percentage = (Number(pct) * 100).toFixed(2);
  const profit = (Number(price) * Number(min) * Number(pct)).toFixed(2);

  return (
    `${percentage}% comission per ${min}x items 
    OR
    R$ ${profit} per ${min}x items`
  )

}

const ItemCard = (props) => {
  return (
    <CardContainer onClick={props.stock > 0 ? props.onClick : null}>
      <ItemPicture src={props.image} />
      <ItemInfo>
        <Title>{props.name}</Title>
        <Price>{`R$ ${Number(props.price).toFixed(2)}`}</Price>
        <Comission>
          {calculateComission(
            props.comission,
            props.minimumComission,
            props.price
          )}
        </Comission>
      </ItemInfo>
    </CardContainer>
  );
}

export default ItemCard;
export { calculateComission };