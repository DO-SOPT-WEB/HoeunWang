import { useState } from "react";
import * as S from "./Button.style";

const Button = ({
  children,
  customStyle,
  disabled = false,
  error = false,
  ...rest
}) => {
  return (
    <S.Button
      customStyle={customStyle}
      disabled={disabled}
      error={error}
      {...rest}
    >
      {children}
    </S.Button>
  );
};

export default Button;
