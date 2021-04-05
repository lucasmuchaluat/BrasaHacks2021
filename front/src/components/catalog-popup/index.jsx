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
  const itemIDs = props.products.map((el) => <Separator id = {el.productId}><ItemID>{el.name}</ItemID> <Delete onClick={() => props.onDelete(el)}> Delete </Delete ></Separator>); 

  return (
    <Wrapper>
      <ItemInfo>
        <Title>{ props.name }</Title>
        <Description>{props.description}</Description>
        <ItemQ>{`${props.products.length}  items in this catalog`}</ItemQ>
        <ItemQ>{`Catalog ID: ${props.catalogId}`}</ItemQ>
        {itemIDs}
      </ItemInfo>
    </Wrapper>
  )
}

export default CatalogPopup;