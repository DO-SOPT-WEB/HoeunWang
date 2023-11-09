import Header from "../../components/Header";
import Recommend from "../../components/Recommend";
import { GlobalStyle } from "../../styles/GlobalStyle.js";
import * as S from "./Main.style.js";

function Main() {
  return (
    <S.Container>
      <GlobalStyle />
      <Header />
      <Recommend />
    </S.Container>
  );
}
export default Main;
