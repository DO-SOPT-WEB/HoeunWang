import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffefd5;
  width: 50%;
  padding: 0.5% 2%;
  border-radius: 5px;
  margin: 5% 0;
`;

export const ContentField = styled.div`
  display: flex;
  width: 80%;
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

export const ButtonField = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 5% 0;
`;
export const StartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #bdb76b;
  padding: 0.5% 1%;
  border-radius: 5px;
`;
