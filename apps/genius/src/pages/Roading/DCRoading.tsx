import React, { useState, useEffect } from "react";
import * as C from "../../pages/StoryFlow/container";
import * as S from "./RoadingStyle";

const DCRoading: React.FC = () => {
  const [name] = useState("혜진");
  const messages = [
    `${name}이가 작성한 이야기를\n바탕으로 동화를 만들어볼게`,
    "잠깐만 기다려\n동화책이 만들어지고 있어\n......"
  ];
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [messages.length]);

  const currentPage = "DCRoading";

  return (
    <S.DContainer>
      <C.Header currentPage={currentPage} />
      <S.Label>{messages[messageIndex]}</S.Label> <S.DC />
    </S.DContainer>
  );
};

export default DCRoading;
