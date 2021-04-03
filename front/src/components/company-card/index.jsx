// dependencies
import { NavLink } from 'react-router-dom';

// styles
import { CardContainer, CompanyLogo, CompanyInfo, Title, Subtitle, Description } from './styles';

const CompanyCard = (props) => {
  return (
    <NavLink to={props.href} style={{textDecoration: 'none'}}>
      <CardContainer>
        <CompanyLogo src={props.logo} alt={props.alt} />
        <CompanyInfo>
          <Title>{props.name}</Title>
          <Subtitle>{props.category}</Subtitle>
          <Subtitle>{`${
            props.items > 98 ? '99+' : props.items
          } items`}</Subtitle>
          <Description>{props.description}</Description>
        </CompanyInfo>
      </CardContainer>
    </NavLink>
  );
}

export default CompanyCard;