import {
  CatName,
  CardContainer,
  ItemInfo,
  ItemQ,
  Items,
  LixoIcon
} from './styles';
import avon from '../../assets/company-logos/avon.svg'
import lixo from '../../assets/catalog-assets/lixo.svg'



const CatalogCard = (props) => {


  return (

      <CardContainer  onClick={props.onClick}> 
        <img src={avon} style={{width: "87px", marginLeft: "25px", overflow: "hidden"}}/>
        <ItemInfo>
          <CatName>{props.name}</CatName>
          <ItemQ>{props.description}</ItemQ>
          <ItemQ>{`${props.products.length}  items in this catalog`} </ItemQ>
          <ItemQ>{`Catalog ID: ${props.catalogId}`}</ItemQ>
        </ItemInfo>  
        <LixoIcon onClick={props.onClick1} src={lixo}/>
      </CardContainer>

  );
}

export default CatalogCard;