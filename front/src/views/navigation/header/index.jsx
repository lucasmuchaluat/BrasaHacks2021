// dependecies
import React from 'react'

// styles
import {
  Container,
  Logo,
  UserProfile,
  ProfilePicture,
  Username,
} from './styles';

// assets
import VTEXLogo from '../../../assets/vtexlogo.svg'
import JonSnow from '../../../assets/jonsnow.svg'

class Header extends React.Component {

  render() {
    return (
      <Container>
        <Logo src={VTEXLogo} alt='Pink VTEX Logo' />
        <UserProfile>
          <ProfilePicture src={JonSnow} alt='Jon Snow profile picture'/>
          <Username>Jon Snow das Neves</Username>
        </UserProfile>
      </Container>
    )
  }
}

export default Header;