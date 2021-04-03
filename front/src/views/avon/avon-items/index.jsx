// dependencies
import React from 'react'
import { Modal } from '@material-ui/core';

// components
import SearchBar from '../../../components/search-bar/index';
import ItemCard from '../../../components/item-card/index';
import PopupCard from '../../../components/popup-card/index';

// styles
import { Wrapper, ListOfItems } from './styles';

// data
import {STUB_ITEMS} from './data'

class AvonItems extends React.Component {

  state = {
    modalOpen: false,
  }

  handleClick(el) {
    this.setState({ modalOpen: true })
    this.currItem = el;
  }

  render() {
    const items = STUB_ITEMS.map((el, i) => <ItemCard key={i} {...el} onClick={() => this.handleClick(el)} />);
    
    let item_popup = null;
    if (this.currItem !== null) {
      item_popup =
      (
        <Modal
          open={this.state.modalOpen}
          onClose={() => this.setState({ modalOpen: false })}
          style={{ outline: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <PopupCard {...this.currItem} />
        </Modal>
      )
    }

    return (
      <Wrapper>
        {item_popup}
        <SearchBar placeholder="Search for an item..." />
        <ListOfItems>
          {items}
        </ListOfItems>
      </Wrapper>
    );
  }
}

export default AvonItems;