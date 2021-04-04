// dependencies
import React from 'react'
import { Modal } from '@material-ui/core';

// components
import SearchBar from '../../../components/search-bar/index';
import CatalogCard from '../../../components/catalog-card/index';
import CatalogPopup from '../../../components/catalog-popup/index';
import CreateCatalog from '../catalog-create-new/index';
import Button from '../../../components/button/index';

// styles
import { Wrapper, ListOfItems, Rectangle, CatName} from './styles';

// data
import {CATALOG_ITEMS} from './data'
import avon from '../../../assets/company-logos/avon.svg'

class Catalog extends React.Component {

  constructor() {
    super();
    this.state = {
      modalOpen: false,
      createOpen: false,
    };
     
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOpenCreate = this.handleOpenCreate.bind(this);
  }

  handleClick(el) {
    this.setState({ modalOpen: true })
    this.currItem = el;
  }

  handleSubmit(el) {
    console.log('printing here: ' + el);
    this.setState({createOpen: false})
  }

  handleOpenCreate() {
    this.setState({ createOpen: true });
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

    let create_popup = (
      <Modal
        open={this.state.createOpen}
        onClose={() => this.setState({ createOpen: false})}
        style={{ outline: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <CreateCatalog click={ this.handleSubmit}/>
      </Modal>
    )

    return (
      <Wrapper>
        {item_popup}
        {create_popup}
        <Button value="Create new catalog" onClick={() => this.handleOpenCreate()}/>
        <SearchBar placeholder="Search for a catalog..." />
        <ListOfItems>
          {items}
        </ListOfItems>
      </Wrapper>
    );
  }
}

export default Catalog;