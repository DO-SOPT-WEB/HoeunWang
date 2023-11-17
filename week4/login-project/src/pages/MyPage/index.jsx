import { useRecoilValue, useResetRecoilState } from "recoil";
import Button from "../../components/Common/Button";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../constants/route.constant";
import * as S from "./MyPage.style";
import { useEffect, useState } from "react";
import authApi from "../../api/auth.api";
import userId from "../../service/auth/recoil/auth.atoms";

function MyPage() {
  const navigate = useNavigate();
  const memberId = useRecoilValue(userId);
  const [username, setUserName] = useState("");
  const [nickname, setNickName] = useState("");

  useEffect(() => {
    console.log(memberId);
    const fetchData = async () => {
      try {
        const response = await authApi.getUserDetail({ memberId });
        if (response) {
          setUserName(response.username);
          setNickName(response.nickname);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // 데이터 가져오는 함수 호출
  }, []);

  const handleLogout = () => {
    navigate(ROUTE.LOGIN);
  };
  return (
    <S.Container>
      <p>{username}</p>
      <p>{nickname}</p>
      <Button onClick={handleLogout}>로그아웃</Button>
    </S.Container>
  );
}

export default MyPage;
