import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContentSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const SelectType = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffefd5;
  padding: 20% 15%;
  border-radius: 10px;

  &:hover {
    background-color: #ffa07a;
  }
`;

export const ButtonSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
`;
export const StartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #bdb76b;
  padding: 0.5% 1%;
  border-radius: 5px;
`;
