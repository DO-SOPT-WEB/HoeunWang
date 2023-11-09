import Random from "../Random";
import Taste from "../Taste";
import * as S from "../style";

function Recommend() {
  return (
    <S.Container>
      <S.Title>원하는 추천 방식을 골라줘!</S.Title>
      <S.SubContainer>
        <Taste />
        <Random />
      </S.SubContainer>
    </S.Container>
  );
}
export default Recommend;
