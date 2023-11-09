import SelectType from "./SelectType";
import PropTypes from "prop-types";
import ViewOption from "./ViewOption";

import * as S from "./Article.style";

Article.propTypes = {
  selectedType: PropTypes.string.isRequired,
  selectedHandler: PropTypes.func.isRequired,
  isStart: PropTypes.bool.isRequired,
  startHandler: PropTypes.func.isRequired,
};

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
