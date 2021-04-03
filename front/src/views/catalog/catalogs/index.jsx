// dependencies
import React from 'react'
import { Modal } from '@material-ui/core';

// components
import SearchBar from '../../../components/search-bar/index';
import CatalogCard from '../../../components/catalog-card/index';
import CatalogPopup from '../../../components/catalog-popup/index';

// styles
import { Wrapper, ListOfItems } from './styles';

// data
import {CATALOG_ITEMS} from './data'

class Catalog extends React.Component {
  state = {
    modalOpen: false,
  }

  handleClick(el) {
    console.log("SEHEES");
    this.setState({ modalOpen: true })
    this.currItem = el;
  }

  render() {
    const items = CATALOG_ITEMS.map((el, i) => <CatalogCard key={i} {...el} onClick={() => this.handleClick(el)} />);
    
    let item_popup = null;
    if (this.currItem !== null) {
      item_popup =
      (
        <Modal
          open={this.state.modalOpen}
          onClose={() => this.setState({ modalOpen: false })}
          style={{ outline: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <CatalogPopup {...this.currItem} />
        </Modal>
      )
    }

    return (
      <Wrapper>
        {item_popup}
        <SearchBar placeholder="Search for a catalog..." />
        <ListOfItems>
          {items}
        </ListOfItems>
      </Wrapper>
    );
  }
}

export default Catalog;