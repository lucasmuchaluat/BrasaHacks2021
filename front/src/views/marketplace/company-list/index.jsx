// dependencies
import React from 'react';

// components
import CompanyCard from '../../../components/company-card/index';

// styles
import { Wrapper } from './styles';

// data
import { STUB_DATA } from './data';

class CompanyList extends React.Component {
  render() {

    const list_of_companies = STUB_DATA.map(el => <CompanyCard key={el.id} {...el} />);

    return (
      <Wrapper>
        {list_of_companies}
      </Wrapper>
    );
  }
}

export default CompanyList;
