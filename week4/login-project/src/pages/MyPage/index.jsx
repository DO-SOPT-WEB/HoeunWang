import { useRecoilValue, useResetRecoilState } from "recoil";
import Button from "../../components/Common/Button";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../constants/route.constant";
import * as S from "./MyPage.style";
import { useEffect, useState } from "react";
import authApi from "../../api/auth.api";
import userId from "../../recoil/auth.atoms";
import ProfileImg from "../../assets/images/default-profile.png";

function MyPage() {
  const navigate = useNavigate();
  const memberId = useRecoilValue(userId);
  const [username, setUserName] = useState("");
  const [nickname, setNickName] = useState("");
  const resetUserId = useResetRecoilState(userId);

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
    resetUserId();
    navigate(ROUTE.LOGIN);
  };
  return (
    <S.Container>
      <S.Title>MyPage</S.Title>
      <S.SubContainer>
        <S.ImgContainer>
          <S.Img src={ProfileImg} />
        </S.ImgContainer>
        <S.ContentContainer>
          <S.Content>ID : {username}</S.Content>
          <S.Content>닉네임 : {nickname}</S.Content>
        </S.ContentContainer>
      </S.SubContainer>
      <Button onClick={handleLogout}>로그아웃</Button>
    </S.Container>
  );
}

export default MyPage;
