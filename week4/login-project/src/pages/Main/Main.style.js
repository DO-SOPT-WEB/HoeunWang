import styled from "styled-components";

export const Container = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})}
  background-color: ${({ theme: { colors } }) => colors.greyScale.guide};
  width: 100%;
  height: 100vh;
`;
