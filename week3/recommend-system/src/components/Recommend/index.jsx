import Article from "./Article";
import Title from "./Title";

import * as S from "./Recommend.style";
import { useState } from "react";

function Recommend() {
  const [selectedType, setSelectedType] = useState("");
  const [isStart, setIsStart] = useState(false);
  return (
    <S.Container>
      <Title
        selectedType={selectedType}
        selectedTypeHandler={(selected) => {
          setSelectedType(selected);
        }}
        startHandler={() => {
          setIsStart(true);
        }}
      />
      <Article
        selectedType={selectedType}
        selectedTypeHandler={(selected) => {
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
export default Recommend;
