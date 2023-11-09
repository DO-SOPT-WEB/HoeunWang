import Header from "../../components/Header";
import Recommend from "../../components/Recommend";
import * as S from "./Main.style.js";

function Main() {
  return (
    <>
      <S.Container>
        <Header />
        <Recommend />
      </S.Container>
    </>
  );
}
export default Main;
