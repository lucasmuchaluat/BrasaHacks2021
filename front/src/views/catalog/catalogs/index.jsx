// dependencies
import React from 'react'

// components
import SearchBar from '../../../components/search-bar/index';
import ItemCard from '../../../components/catalog-card/index';

// styles
import { Wrapper, ListOfItems } from './styles';

// data
import {CATALOG_ITEMS} from './data'

class Catalog extends React.Component {

  render() {
    const items = CATALOG_ITEMS.map((el, i) => <ItemCard key={i} {...el} />);

    return (
      <Wrapper>
        <SearchBar placeholder="Search for a catalog..." />
        <ListOfItems>
          {items}
        </ListOfItems>
      </Wrapper>
    );
  }
}

export default Catalog;