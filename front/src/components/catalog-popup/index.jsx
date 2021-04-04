// styles
import {
  Wrapper,
  ItemInfo,
  Title,
  Description,
  Items,
  ItemQ,
  Separator,
  ItemID,
  Delete,
} from './styles';


const CatalogPopup = (props) => {
  const itemIDs = props.itemIDs.map((el) => <Separator><ItemID>{el}</ItemID> <Delete> Delete </Delete></Separator>); 

  return (
    <Wrapper>
      <ItemInfo>
        <Title>{ props.name }</Title>
        <Description>{props.description}</Description>
        <ItemQ>{`${props.itemQuantity}  items in this catalog`}</ItemQ>
        {itemIDs}
      </ItemInfo>
    </Wrapper>
  )
}

export default CatalogPopup;