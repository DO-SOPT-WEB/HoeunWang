import styled from "styled-components";

export const Container = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({
      direction: "column",
      justify: "space-around",
      align: "center",
    })};
  width: 50%;
  height: 75%;
  border-radius: 0.5rem;
  background-color: ${({ theme: { colors } }) => colors.greyScale.white};
  padding: 3rem;
  gap: 2rem;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  font-size: ${({ theme: { fonts } }) => fonts.korean.title};
`;

// img 포함 전체content wrapper입니다.
export const SubContainer = styled.div`
  display: flex;
  gap: 1rem;

  width: 100%;
`;

//img
export const ImgContainer = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})}
  margin: 1rem;
`;
export const Img = styled.img`
  width: 8rem;
  height: 8rem;
`;

//content
export const Content = styled.p`
  display: flex;
  font-size: ${({ theme: { fonts } }) => fonts.korean.emphasis};
  padding: 2rem;
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.primary.light};
  border-radius: 5px;
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
`;
