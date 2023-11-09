/* eslint-disable react/prop-types */
import SelectType from "./SelectType";
import ViewOption from "./ViewOption";

import * as S from "./Article.style";

function Article({ selectedType, selectedHandler, isStart, startHandler }) {
  return (
    <S.ArticleContainer>
      {!isStart ? (
        <SelectType
          selectedType={selectedType}
          selectedHandler={selectedHandler}
          startHandler={startHandler}
        />
      ) : (
        <ViewOption
          selectedHandler={selectedHandler}
          startHandler={startHandler}
        />
      )}
    </S.ArticleContainer>
  );
}

export default Article;
