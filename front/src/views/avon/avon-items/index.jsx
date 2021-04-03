// dependencies
import React from 'react'

// components
import SearchBar from '../../../components/search-bar/index';
import ItemCard from '../../../components/item-card/index';

// styles
import { Wrapper, ListOfItems } from './styles';

// data
import {STUB_ITEMS} from './data'

class AvonItems extends React.Component {

  render() {
    const items = STUB_ITEMS.map((el, i) => <ItemCard key={i} {...el} />);

    return (
      <Wrapper>
        <SearchBar placeholder="Search for an item..." />
        <ListOfItems>
          {items}
        </ListOfItems>
      </Wrapper>
    );
  }
}

export default AvonItems;