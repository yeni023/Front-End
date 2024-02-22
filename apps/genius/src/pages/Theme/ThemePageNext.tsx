//ThemePageNext.tsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ShapeNext from "../../components/Theme/ShapeNext";
import * as Styles from "./ThemePageStyle";

const ThemePageNext: React.FC = () => {
  const location = useLocation();
  const id = parseInt(new URLSearchParams(location.search).get("id") || "1");

  const navigate = useNavigate();
  const handleNoBtnClick = () => {
    navigate(`/ThemePage`);
  };

  const getComponentIndex = (id: number) => {
    return (id - 1) % 3;
  };

  return (
    <Styles.BackgroundContainer>
      <Styles.Title>좋았어, 이제 이야기 꽃을 피워볼까?</Styles.Title>
      <Styles.BtnContainer>
        <Styles.OkBtn>응 그럴래</Styles.OkBtn>
        <Styles.NoBtn onClick={handleNoBtnClick}>다시 고를래</Styles.NoBtn>
      </Styles.BtnContainer>
      <Styles.ShapeContainer>
        {[1, 2, 3].map((index) => (
          <ShapeNext
            key={index}
            isFlower={getComponentIndex(id) === index - 1}
          />
        ))}
      </Styles.ShapeContainer>
    </Styles.BackgroundContainer>
  );
};

export default ThemePageNext;
