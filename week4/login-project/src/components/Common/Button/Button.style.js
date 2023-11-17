import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme: { mixin } }) => mixin.flexCenter({})}
  padding: 0.5rem;
  width: 100%;
  border-radius: 0.5rem;
  background-color: ${({ theme: { colors } }) => colors.primary.normal};
  color: ${({ theme: { colors } }) => colors.greyScale.white};

  border: none;
  ${({ theme: { fonts } }) => fonts.korean.emphasis};
  ${({ customStyle }) => customStyle};
`;
