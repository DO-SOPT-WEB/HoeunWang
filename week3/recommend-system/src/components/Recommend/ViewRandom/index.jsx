import { IceCreamOption } from "../../../constants/IceCreamOption";
import * as S from "./ViewRandom.style";
import { useState, useEffect } from "react";

function ViewRandom() {
  const [countdown, setCountdown] = useState(3);
  const [randomIceCream, setRandomIceCream] = useState(null);

  const getRandomIceCream = () => {
    const categories = Object.keys(IceCreamOption);
    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)];
    const flavors = Object.keys(IceCreamOption[randomCategory]);
    const randomFlavor = flavors[Math.floor(Math.random() * flavors.length)];

    return IceCreamOption[randomCategory][randomFlavor].new;
  };

  useEffect(() => {
    const startCountdown = () => {
      if (countdown > 1) {
        const interval = setInterval(() => {
          setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        return () => {
          clearInterval(interval);
        };
      } else {
        const iceCream = getRandomIceCream();
        setRandomIceCream(iceCream);
      }
    };

    if (countdown > 0) {
      const countdownInterval = startCountdown();

      return () => {
        clearInterval(countdownInterval);
      };
    }
  }, [countdown]);

  return (
    <S.Container>
      <S.Title>랜덤 결과</S.Title>
      {countdown > 0 ? (
        <S.ContentContainer>{countdown}</S.ContentContainer>
      ) : (
        <S.ContentContainer>{randomIceCream}</S.ContentContainer>
      )}
    </S.Container>
  );
}

export default ViewRandom;
