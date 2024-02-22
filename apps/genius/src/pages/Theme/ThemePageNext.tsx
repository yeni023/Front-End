//ThemePageNext.tsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ShapeNext from "../../components/Theme/ShapeNext";
import * as Styles from "./ThemePageStyle";
import { themes } from "./ThemePage";

const ThemePageNext: React.FC = () => {
  const location = useLocation();
  const id = parseInt(new URLSearchParams(location.search).get("id") || "1");
  const navigate = useNavigate();

  const handleNoBtnClick = () => {
    navigate(`/ThemePage`);
  };

  const getThemeIndex = (id: number) => {
    return Math.ceil(id / 3) - 1; // 테마의 인덱스 계산
  };

  const themeIndex = getThemeIndex(id);
  const startIndex = themeIndex * 3 - 1; // 시작 인덱스 계산

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
            key={startIndex + index}
            title={themes[startIndex + index].title} // 해당 테마의 title 사용
            isFlower={getComponentIndex(id) === index - 1}
          />
        ))}
      </Styles.ShapeContainer>
    </Styles.BackgroundContainer>
  );
};

export default ThemePageNext;
