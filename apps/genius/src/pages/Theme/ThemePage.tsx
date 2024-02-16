// ThemePage.tsx
import React, { useState, useEffect } from "react";
import Shape from "../../components/Theme/Shape";
import * as Styles from "./ThemePageStyle";

interface Theme {
  title: string;
  subjectImage: string;
}

const themes: Theme[] = [
  { title: "Title 1", subjectImage: "/subject_image01.png" },
  { title: "Title 2", subjectImage: "/subject_image02.png" },
  { title: "Title 3", subjectImage: "/subject_image03.png" },
  { title: "Title 4", subjectImage: "/subject_image04.png" },
  { title: "Title 5", subjectImage: "/subject_image05.png" },
  { title: "Title 6", subjectImage: "/subject_image06.png" }
];

const ThemePage: React.FC = () => {
  const [selectedShapeIndex, setSelectedShapeIndex] = useState<number | null>(
    null
  );
  const [randomThemes, setRandomThemes] = useState<Theme[]>([]);

  useEffect(() => {
    generateRandomThemes();
  }, []);

  const generateRandomThemes = () => {
    const selected: Theme[] = [];
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * themes.length);
      selected.push(themes[randomIndex]);
    }
    setRandomThemes(selected);
  };

  const handleShapeClick = (index: number) => {
    setSelectedShapeIndex(index);
  };
  const handleRefresh = () => {
    generateRandomThemes();
  };
  return (
    <Styles.BackgroundContainer>
      <Styles.Title>주제가 될 새싹을 골라볼까?</Styles.Title>
      <Styles.ShapeContainer>
        {randomThemes.map((theme, index) => (
          <Shape
            key={index}
            title={theme.title}
            subjectImage={theme.subjectImage}
            isSelected={selectedShapeIndex === index} // 해당 Shape이 선택되었는지 여부를 전달
            onClick={() => handleShapeClick(index)} // 클릭 이벤트 핸들러
          />
        ))}
      </Styles.ShapeContainer>
      <Styles.Regenarate onClick={handleRefresh}>새로 고침</Styles.Regenarate>
    </Styles.BackgroundContainer>
  );
};

export default ThemePage;
