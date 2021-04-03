// styles
import { SearchBox, SubmitButton } from './styles';

const SearchBar = (props) => {
  return (
    <div>
      <SearchBox type='text' placeholder={props.placeholder} />
      {/* <SubmitButton type="submit"></SubmitButton> */}
    </div>
  )
}

export default SearchBar;