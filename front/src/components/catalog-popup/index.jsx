// styles
import {
  Wrapper,
  ItemInfo,
  Title,
  Description,
  Items,
  ItemQ,
  Price,
  Separator,
} from './styles';


const CatalogPopup = (props) => {

  return (
    <Wrapper>
      <ItemInfo>
        <Title>{ props.name }</Title>
        <Description>{props.description}</Description>
        <ItemQ>{`${props.itemQuantity}  items`}</ItemQ>
        <table>
          <tbody>
            {props.itemIDs.map((itemID) =>(
              <tr>{itemID}</tr>
            ))}
          </tbody>
        </table>
        <Price>{ `R$ ${props.price}` }</Price> 
        <Separator />
      </ItemInfo>
    </Wrapper>
  )
}

export default CatalogPopup;