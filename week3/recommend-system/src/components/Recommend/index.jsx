import SelectType from "./SelectType";
import ViewOption from "./ViewOption";
import ViewRandom from "./ViewRandom";
import { useEffect, useState } from "react";

import * as S from "./Recommend.style";

function Recommend({ selectedType, selectedHandler, isStart, startHandler }) {
  const [resetViewOption, setResetViewOption] = useState(false);

  const handleResetViewOption = () => {
    setResetViewOption(true);
  };

  useEffect(() => {
    if (resetViewOption) {
      setResetViewOption(false);
    }
  }, [resetViewOption]);
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
          resetHandler={handleResetViewOption}
        />
      ) : (
        <ViewRandom />
      )}
    </S.RecommendContainer>
  );
}

export default Recommend;
