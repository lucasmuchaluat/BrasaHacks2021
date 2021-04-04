import Button from '../../../components/button/index'
import React from 'react';
import SearchBar from '../../../components/search-bar';
import {Wrapper, Title, Subtitle, SearchBox} from './styles'

class CreateCatalog extends React.Component {
  state = {
    name: ''
  }

  handleChange(e) {
    this.setState({name: e.target.value})
  }

  render() {
    return (
      <Wrapper>
        <Title>Create new catalog</Title>
        <Subtitle>Insert the name of the new catalog.</Subtitle>
        <SearchBox onChange={(e) => this.handleChange(e)} type='text' placeholder='Avon organic catalog...'/>
        <Button
          value='Create'
          disabled={false}
          onClick={() => this.props.click(this.state.name)}
        />
      </Wrapper>
    );
  }
}

export default CreateCatalog;