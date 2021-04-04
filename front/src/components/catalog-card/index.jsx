import {
  CatName,
  CardContainer,
  ItemInfo,
  ItemQ,
  Items,
} from './styles';
import avon from '../../assets/company-logos/avon.svg'
import lixo from '../../assets/catalog-assets/lixo.svg'



const CatalogCard = (props) => {
  const items = props.itemIDs.map((el, i) => <Items key={i} {...el} onClick={() => this.handleClick(el)} />);


  return (
    <CardContainer onClick={props.onClick}>
      <img src={avon} style={{width: "87px", marginLeft: "25px", overflow: "hidden"}}/>
      <ItemInfo>
        <CatName>{props.name}</CatName>
        <ItemQ>Avon</ItemQ>
        <ItemQ>{`${props.itemQuantity}  items in this catalog`} </ItemQ>
      </ItemInfo>  
      <img src={lixo} style={{marginLeft: "auto", width: "38px",  marginRight: "50px"}}/>
    </CardContainer>
  );
}

export default CatalogCard;