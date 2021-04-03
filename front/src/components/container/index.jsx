// styles
import { Wrapper } from './styles';

const Container = (props) => {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  )
}

export default Container;