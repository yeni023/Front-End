import React, { useState } from "react";
import * as C from "../../pages/StoryFlow/container";
import * as S from "./RoadingStyle";

const DCRoading: React.FC = () => {
  const [name] = useState("혜진"); // 이름을 상태로 관리
  const currentPage = "DCRoading";
  const [message, setMessage] = useState(
    `${name}이가 작성한 이야기를\n바탕으로 동화를 만들어볼게`
  );

  const handleClick = () => {
    setMessage("잠깐만 기다려\n동화책이 만들어지고 있어\n.....");
  };

  return (
    <S.DContainer onClick={handleClick}>
      <C.Header currentPage={currentPage} />
      <S.Label>{message}</S.Label>
      <S.DC />
    </S.DContainer>
  );
};

export default DCRoading;
