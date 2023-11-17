import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({
      justify: "space-around",
    })};
  width: 100%;
`;

export const TextInputBorder = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid ${({ theme: { colors } }) => colors.primary.normal};
  border-radius: 0.2rem;
  padding: 0.5rem;
  ${({ error }) => {
    if (error) {
      return css`
        margin-bottom: 0.2rem;
        border: 1px solid;
        border-color: ${({ theme: { colors } }) => colors.important.normal};
        & > input {
          color: ${({ theme: { colors } }) => colors.important.normal};
        }
      `;
    }
  }}
  ${({ customStyle }) => customStyle};
`;

export const Input = styled.input`
  ${({ theme: { mixin } }) => mixin.flexCenter({})}
  border: none;
  outline: none;
`;

export const Error = styled.span`
  align-self: flex-start;
  padding-left: 0.2rem;
  font-size: 0.8rem;
  color: ${({ theme: { colors } }) => colors.important.normal};
`;

export const Label = styled.label`
  display: flex;
  align-items: flex-start;
  width: 10rem;
  margin-right: 1rem;
  ${({ theme: { fonts } }) => fonts.korean.emphasis};
`;
