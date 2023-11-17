import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  height: 60%;
  border-radius: 0.5rem;
  background-color: white;
  padding: 3rem;
  gap: 2rem;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  font-size: ${({ theme: { fonts } }) => fonts.korean.title};
`;
