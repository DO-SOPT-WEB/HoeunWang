import Button from "../../components/Common/Button";
import { deleteUserInfo } from "../../service/auth";
import * as S from "./MyPage.style";

function MyPage() {
  return (
    <S.Container>
      <Button onClick={deleteUserInfo}>로그아웃</Button>
    </S.Container>
  );
}

export default MyPage;
