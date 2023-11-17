import { useState } from "react";
import Header from "../../components/Header";
import Recommend from "../../components/Recommend";
import { GlobalStyle } from "../../styles/GlobalStyle.js";
import * as S from "./Main.style.js";

function Main() {
  const [selectedType, setSelectedType] = useState("");
  const [isStart, setIsStart] = useState(false);
  return (
    <S.Container>
      <GlobalStyle />
      <Header />
      <Recommend
        selectedType={selectedType}
        selectedHandler={(selected) => {
          setSelectedType(selected);
        }}
        isStart={isStart}
        startHandler={() => {
          setIsStart(true);
        }}
      />
    </S.Container>
  );
}
export default Main;
