import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const TextInputBorder = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid;
  border-radius: 0.2rem;
  padding: 0.5rem;
  ${({ error }) => {
    if (error) {
      return css`
        margin-bottom: 0.2rem;
        border: 1px solid;
        border-color: red;
        & > input {
          color: red;
        }
      `;
    }
  }}
  ${({ customStyle }) => customStyle};
`;

export const Input = styled.input`
  display: flex;
  align-items: center;
  border: none;
  outline: none;
`;

export const Error = styled.span`
  align-self: flex-start;
  padding-left: 0.2rem;
  font-size: 0.8rem;
  color: red;
`;

export const Label = styled.label`
  display: flex;
  width: 80%;
  align-items: flex-start;
  align-items: center;
  margin-right: 1rem;
  font-weight: 700;
`;
