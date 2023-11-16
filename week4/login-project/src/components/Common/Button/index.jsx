import * as S from "./Button.style";

const Button = ({ children, customStyle, disabled = false, ...rest }) => {
  return (
    <S.Button customStyle={customStyle} disabled={disabled} {...rest}>
      {children}
    </S.Button>
  );
};

export default Button;
