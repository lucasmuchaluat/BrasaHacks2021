import { Title, Subtitle } from '../../../components/company-card/styles';
import { Wrapper, CompanyLogo, Description } from './styles';
import AvonLogo from '../../../assets/company-logos/avon.svg';

const AvonHeader = () => {
  return (
    <Wrapper>
      <CompanyLogo src={AvonLogo} alt='Avon logo' />
      <Title>Avon</Title>
      <Subtitle>Health and Beauty</Subtitle>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget
        vulputate ante. Pellentesque habitant morbi tristique senectus et netus
        et malesuada fames ac turpis egestas. Pellentesque mollis at ligula
        vitae commodo. (250 words max)
      </Description>
    </Wrapper>
  ); 
}

export default AvonHeader;