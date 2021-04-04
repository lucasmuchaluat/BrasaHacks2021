// dependencies
import React from 'react';

// styles
import {
  Wrapper,
  ItemPicture,
  ItemInfo,
  Title,
  Description,
  Price,
  Comission,
  Separator,
  Dropdown
} from './styles';

import { calculateComission } from '../item-card/index';
import Button from '../button/index';

class PopupCard extends React.Component {

  state = {
    catalog: 0,
  }

  handleChange(e) {
    this.setState({ catalog: e.target.value });
  }

  render() {
    let catalogs = null;
    if (this.props.catalogs) {
      catalogs = this.props.catalogs.map((el, i) => <option key={i} value={el.catalogId}>{el.name}</option>);
    }

    return (
      <Wrapper>
        <ItemPicture src={this.props.image} />
        <ItemInfo>
          <Title>{this.props.name}</Title>
          <Description>{this.props.bias}</Description>
          <Price>{`R$ ${this.props.price}`}</Price>
          <Comission>{calculateComission(this.props.comission, this.props.minimumComission, this.props.price)}</Comission>
          <Separator />
          <Dropdown value={this.state.catalog} onChange={(e) => this.handleChange(e)}>
            <option value={0} onChange={(e) => this.handleChange(e)}>Select a category...</option>
            {catalogs}
          </Dropdown>
          <Button
            value='Add item'
            disabled={this.state.catalog == 0 ? true : false}
            onClick={() => {this.props.click(this.state.catalog)} }
          />
        </ItemInfo>
      </Wrapper>
    )
  }
}

export default PopupCard;