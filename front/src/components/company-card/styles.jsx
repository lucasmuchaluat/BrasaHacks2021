import styled from 'styled-components';

const CardContainer = styled.div`
  box-shadow: 0px 0px 50px 0.5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 0px 15px;
  width: 420px;
  height: 164px;
  transition: all 0.2s ease-in-out;
  margin-bottom: 70px;

  &:hover {
    transform: scale(1.01);
    cursor: pointer;
  }
`;

const CompanyLogo = styled.img`
  height: 90px;
  margin-right: 15px;
`;

const CompanyInfo = styled.div`
`;

const Title = styled.h3`
  font-weight: bold;
  font-size: 25px;
  color: #142032;
  margin: 0px;
  margin-bottom: 5px;
`;

const Subtitle = styled.p`
  font-weight: normal;
  font-size: 15px;
  color: #717786;
  margin: 0px;
  margin-bottom: 3px;
`;

const Description = styled.p`
  font-weight: normal;
  font-size: 10px;
  color: #717786;
`;

export { CardContainer, CompanyLogo, CompanyInfo, Title, Subtitle, Description };