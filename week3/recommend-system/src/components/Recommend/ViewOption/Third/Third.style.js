import styled from "styled-components";

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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;

export const OptionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 5% 0;
`;
export const Option = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffefd5;
  border-radius: 5px;
  padding: 15% 0;
  width: 7rem;

  &:hover {
    background-color: #ffa07a;
  }
`;

export const ButtonField = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #bdb76b;
  padding: 0.5% 1%;
  border-radius: 5px;
`;
