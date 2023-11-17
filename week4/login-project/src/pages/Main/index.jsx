import { Outlet } from "react-router-dom";
import * as S from "./Main.style";

function Main() {
  return (
    <S.Container>
      <Outlet />
    </S.Container>
  );
}

export default Main;
