import { IceCreamImg } from "../../../constants/IceCreamImg";
import { IceCreamOption } from "../../../constants/IceCreamOption";
import * as S from "./ViewRandom.style";
import { useState, useEffect } from "react";

function ViewRandom() {
  const [countdown, setCountdown] = useState(3);
  const [randomIceCream, setRandomIceCream] = useState(null);
  const [finalFlavor, setFinalFlavor] = useState(null);

  const getRandomIceCream = () => {
    const categories = Object.keys(IceCreamOption);
    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)];
    const flavors = Object.keys(IceCreamOption[randomCategory]);
    const randomFlavor = flavors[Math.floor(Math.random() * flavors.length)];

    setFinalFlavor(IceCreamOption[randomCategory][randomFlavor].new.key);

    return IceCreamOption[randomCategory][randomFlavor].new.value;
  };

  const startCountdown = () => {
    if (countdown > 1) {
      const interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 2000);

      return () => {
        clearInterval(interval);
      };
    } else {
      const iceCream = getRandomIceCream();
      setRandomIceCream(iceCream);
    }
  };

  useEffect(() => {
    if (countdown > 0) {
      const countdownInterval = startCountdown();

      return () => {
        clearInterval(countdownInterval);
      };
    }
  }, [countdown]);

  const handleRandomize = () => {
    setCountdown(3);
    setRandomIceCream(null);
    setFinalFlavor(null);
  };

  return (
    <S.Container>
      <S.Title>랜덤 결과</S.Title>
      {countdown > 0 ? (
        <S.ContentContainer>{countdown}</S.ContentContainer>
      ) : (
        <S.ContentContainer>
          <S.ImageContainer>
            <S.Image src={IceCreamImg[finalFlavor]} alt="Ice Cream" />
          </S.ImageContainer>
          {randomIceCream}
        </S.ContentContainer>
      )}
      <S.ButtonField>
        <S.Button onClick={handleRandomize}>다시하기</S.Button>
      </S.ButtonField>
    </S.Container>
  );
}

export default ViewRandom;
