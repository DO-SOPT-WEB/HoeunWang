import * as S from "./TextInput.style";

const TextInput = ({
  name,
  placeholder,
  value,
  onChange,
  type = "text",
  disabled,
  isError = false,
  errorMessage,
  customStyle,
  ...rest
}) => {
  return (
    <>
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
    </>
  );
};

export default TextInput;
