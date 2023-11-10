/* eslint-disable react/prop-types */
import SelectType from "./SelectType";
import ViewOption from "./ViewOption";
import ViewRandom from "./ViewRandom";

import * as S from "./Recommend.style";

function Recommend({ selectedType, selectedHandler, isStart, startHandler }) {
  return (
    <S.RecommendContainer>
      {!isStart ? (
        <SelectType
          selectedType={selectedType}
          selectedHandler={selectedHandler}
          startHandler={startHandler}
        />
      ) : selectedType === "taste" ? (
        <ViewOption
          selectedHandler={selectedHandler}
          startHandler={startHandler}
        />
      ) : (
        <ViewRandom />
      )}
    </S.RecommendContainer>
  );
}

export default Recommend;
