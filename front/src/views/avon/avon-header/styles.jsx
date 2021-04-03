import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CompanyLogo = styled.img`
  height: 90px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  text-align: center;
  font-weight: normal;
  font-size: 12px;
  width: 50%;
  color: #717786;
`;

export { Wrapper, CompanyLogo, Description };