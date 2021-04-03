import { Btn, Wrapper } from './styles';

const Button = (props) => {
  return (
    <Wrapper>
      <Btn
        type="button"
        value={props.value}
        disabled={props.disabled}
        onClick={props.onClick}
        />
    </Wrapper>
  );
};

export default Button;