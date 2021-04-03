// dependencies
import React from 'react';

// components
import SectionTitle from '../../../components/section-title/index';
import SearchBar from '../../../components/search-bar/index';

//styles
import { Wrapper } from './styles';

class IntroSection extends React.Component {

  render() {
    return (
      <Wrapper>
        <SectionTitle>Marketplace</SectionTitle>
        <SearchBar placeholder="Search for a store..." />
      </Wrapper>
    );
  }
}

export default IntroSection;