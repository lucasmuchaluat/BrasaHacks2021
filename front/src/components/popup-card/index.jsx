// styles
import {
  Wrapper,
  ItemPicture,
  ItemInfo,
  Title,
  Description,
  Price,
  Comission,
  Separator,
} from './styles';

import { calculateComission } from '../item-card/index';

const PopupCard = (props) => {

  return (
    <Wrapper>
      <ItemPicture img={props.img}/>
      <ItemInfo>
        <Title>{ props.name }</Title>
        <Description>{props.description}</Description>
        <Price>{ `R$ ${props.price}` }</Price>
        <Comission>{calculateComission(props.comission, props.minimum, props.price)}</Comission>
        <Separator />
      </ItemInfo>
    </Wrapper>
  )
}

export default PopupCard;