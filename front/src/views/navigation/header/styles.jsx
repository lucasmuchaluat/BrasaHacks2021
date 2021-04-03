import styled from 'styled-components'

const Container = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d6d8e0;
`;

const Logo = styled.img`
  width: 166px;
`;

const UserProfile = styled.div`
  display: flex;
  margin-right: 20px;
`;

const ProfilePicture = styled.img`
  height: 56px;
  margin-right: 20px;
`;

const Username = styled.p`
  font-weight: bold;
  font-size: 18px;
`;


export { Container, Logo, UserProfile, ProfilePicture, Username };