// dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';

// styles
import { Container } from './styles';

class SideTab extends React.Component {

  render() {
    return (
      <Container>
        <NavLink to='/marketplace' className='btn'>Marketplace</NavLink>
        <NavLink to='/catalogs' className='btn'>Catalogs</NavLink>
        <NavLink to='/profile' className='btn'>Profile</NavLink>
        <NavLink to='/avon' className='btn'>Avon [TEMP]</NavLink>
      </Container>
    )
  }
}
 
export default SideTab;