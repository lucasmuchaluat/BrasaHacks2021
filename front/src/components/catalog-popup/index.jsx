// styles
import {
  Wrapper,
  ItemInfo,
  Title,
  Description,
  Items,
  ItemQ,
  Separator,
} from './styles';


const CatalogPopup = (props) => {

  return (
    <Wrapper>
      <ItemInfo>
        <Title>{ props.name }</Title>
        <Description>{props.description}</Description>
        <ItemQ>{`${props.itemQuantity}  items in this catalog`}</ItemQ>
        <table>
          <tbody>
            {props.itemIDs.map((itemID) =>(
              <tr>{itemID}</tr>
            ))}
          </tbody>
        </table>
        <Separator />
      </ItemInfo>
    </Wrapper>
  )
}

export default CatalogPopup;