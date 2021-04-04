// dependencies
import React from 'react'
import { Modal } from '@material-ui/core';
import axios from 'axios'

// components
import SearchBar from '../../../components/search-bar/index';
import CatalogCard from '../../../components/catalog-card/index';
import CatalogPopup from '../../../components/catalog-popup/index';
import CreateCatalog from '../catalog-create-new/index';
import Button from '../../../components/button/index';
import Spinner from '../../../components/spinner/spinner';


// styles
import { Wrapper, ListOfItems, Rectangle, CatName} from './styles';

// data
import {CATALOG_ITEMS} from './data'
import avon from '../../../assets/company-logos/avon.svg'



class Catalog extends React.Component {

  active = true;

  constructor() {
    super();
    this.state = {
      modalOpen: false,
      createOpen: false,
      loaded: false,
      catsLoaded: false,
      resetState: 1,
    };
     
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOpenCreate = this.handleOpenCreate.bind(this);
    this.items = null;
    this.cats = null;
    //this.loadItems();
    this.loadCats();

  }

  loadCats() {
    this.setState({catsLoaded: false})
    axios.get('https://quiet-river-22739.herokuapp.com/catalogs')
      .then(response => {
        this.cats = response.data;
        this.setState({catsLoaded: true})
      })
  }

  handleClick(el) {
    console.log(el);
    if (this.active) {
      this.setState({ modalOpen: true })
      this.currItem = el;
    }
    this.active = true;
  }

  handleLixo(el) {
    console.log(el.id);
    this.active = false;
    axios.delete('https://quiet-river-22739.herokuapp.com/catalogs/' + el.catalogId)
      .then(response => {
        // console.log(response);
        this.loadCats();
        // this.setState({ resetState: (this.state.resetState + 1) % 2 });
      })

  }

  handleSubmit(el) {
    
    const requestBody = {
      name: el,
      productIds: [],
      description: 'no description',
    }

    axios.post('https://quiet-river-22739.herokuapp.com/catalogs', requestBody)
      .then(response => {
        // console.log(response);
        this.setState({ createOpen: false });
        this.loadCats();
      })
  }

  handleOpenCreate() {
    this.setState({ createOpen: true });
  }

  render() {
    let items = <Spinner/>

    if (this.state.catsLoaded) {
      items = this.cats.map((el, i) => <CatalogCard key={i} {...el} onClick={() => this.handleClick(el)} onClick1={() => this.handleLixo(el)}/>);
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