import * as S from "./TextInput.style";

const TextInput = ({
  name,
  placeholder,
  value,
  label,
  onChange,
  type = "text",
  disabled,
  isError = false,
  errorMessage,
  customStyle,
  ...rest
}) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.TextInputBorder error={isError} customStyle={customStyle}>
        <S.Input
          id={`text-input-${name}`}
          type={type}
          name={name}
          placeholder={placeholder}
          isError
          value={value}
          onChange={onChange}
          disabled={disabled}
          {...rest}
        />
      </S.TextInputBorder>
      {isError && <S.Error>{errorMessage}</S.Error>}
    </S.Container>
  );
};

export default TextInput;
