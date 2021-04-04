// dependencies
import React from 'react'
import { Modal } from '@material-ui/core';
import axios from 'axios';

// components
import SearchBar from '../../../components/search-bar/index';
import ItemCard from '../../../components/item-card/index';
import PopupCard from '../../../components/popup-card/index';
import Spinner from '../../../components/spinner/spinner';

// styles
import { Wrapper, ListOfItems } from './styles';

// data
import { STUB_ITEMS, STUB_CATS } from './data'

class AvonItems extends React.Component {

  // state = {modalOpen: false}

  constructor() {
    super();
    this.state = {
      modalOpen: false,
      loaded: false,
      catsLoaded: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.items = null;
    this.cats = null;
    this.loadItems();
    this.loadCats();
  }

  loadItems() {
    axios.get('https://quiet-river-22739.herokuapp.com/products')
      .then(response => {
        this.items = response.data;
        this.setState({loaded: true})
    })
  }

  loadCats() {
    axios.get('https://quiet-river-22739.herokuapp.com/catalogs')
      .then(response => {
        this.cats = response.data;
        this.setState({catsLoaded: true})
      })
  }

  handleClick(el) {
    this.setState({ modalOpen: true })
    this.currItem = el;
  }

  handleSubmit(el) {
    axios.get(`https://quiet-river-22739.herokuapp.com/catalogs/${el}`)
      .then(response => {
        const currCat = response.data;
        const ids = []
        let alreadyAdded = false
        for (const e of currCat.products) {
          ids.push(e.productId);
          if (e.productId == this.currItem.productId) {
            alreadyAdded = true;
            break;
          }
        }

        if (alreadyAdded)
          this.setState({ modalOpen: false });
        else {
          const requestBody = {
            name: currCat.name,
            productIds: [...ids, this.currItem.productId],
            description: currCat.description,
          }
          axios.patch(`https://quiet-river-22739.herokuapp.com/catalogs/${el}`, requestBody)
            .then(response => {
              this.setState({ modalOpen: false });
            })

        }
      })
  }

  render() {
    let items = <Spinner />;
    if (this.state.loaded) {
      items = this.items.map((el, i) => <ItemCard key={i} {...el} onClick={() => this.handleClick(el)} />);
    }
    
    let item_popup = null;
    if (this.currItem !== null) {
      item_popup =
      (
        <Modal
          open={this.state.modalOpen}
          onClose={() => this.setState({ modalOpen: false })}
          style={{ outline: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <PopupCard {...this.currItem} catalogs={this.cats} click={this.handleSubmit}/>
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