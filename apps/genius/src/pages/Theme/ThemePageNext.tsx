import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ShapeNext from "../../components/Theme/ShapeNext";
import * as Styles from "./ThemePageStyle";

const ThemePageNext: React.FC = () => {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");

  const navigate = useNavigate();
  const handleNoBtnClick = () => {
    navigate(`/ThemePage`);
  };

  return (
    <Styles.BackgroundContainer>
      <Styles.Title>좋았어, 이제 이야기 꽃을 피워볼까?</Styles.Title>
      <Styles.BtnContainer>
        <Styles.OkBtn>응 그럴래</Styles.OkBtn>
        <Styles.NoBtn onClick={handleNoBtnClick}>다시 고를래</Styles.NoBtn>
      </Styles.BtnContainer>
      <Styles.ShapeContainer>
        <ShapeNext isFlower={id === "1"} />
        <ShapeNext isFlower={id === "2"} />
        <ShapeNext isFlower={id === "3"} />
      </Styles.ShapeContainer>
    </Styles.BackgroundContainer>
  );
};

export default ThemePageNext;
