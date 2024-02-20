import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Shape from "../../components/Theme/Shape";
import * as Styles from "./ThemePageStyle";

interface Theme {
  id: string;
  title: string;
  subjectImage: string;
}

const themes1: Theme[] = [
  {
    id: "1",
    title: "동물 친구들의 모험",
    subjectImage: "/subject_image01.png"
  },
  { id: "1", title: "우주 여행 이야기", subjectImage: "/subject_image02.png" }
];
const themes2: Theme[] = [
  { id: "2", title: "요정과 마법 세계", subjectImage: "/subject_image03.png" },
  { id: "2", title: "달의 소녀 이야기", subjectImage: "/subject_image04.png" }
];

const themes3: Theme[] = [
  { id: "3", title: "길 잃은 토마스", subjectImage: "/subject_image05.png" },
  { id: "3", title: "생쥐 가족의 나들이", subjectImage: "/subject_image06.png" }
];

const ThemePage: React.FC = () => {
  const [oneselectedTheme] = useState<Theme>(themes1[0]); // 첫 번째 요소 선택
  const [twoselectedTheme] = useState<Theme>(themes2[0]); // 첫 번째 요소 선택
  const [threeselectedTheme] = useState<Theme>(themes3[0]); // 첫 번째 요소 선택

  const navigate = useNavigate();

  const handleImageContainerClick = (themeId: string) => {
    navigate(`/ThemePageNext?id=${themeId}`);
  };

  return (
    <Styles.BackgroundContainer>
      <Styles.Title>주제가 될 새싹을 골라볼까?</Styles.Title>
      <Styles.JustPadding />
      <Styles.ShapeContainer>
        <Shape
          title={oneselectedTheme.title}
          subjectImage={oneselectedTheme.subjectImage}
          onImageContainerClick={() =>
            handleImageContainerClick(oneselectedTheme.id)
          }
        />
        <Shape
          title={twoselectedTheme.title}
          subjectImage={twoselectedTheme.subjectImage}
          onImageContainerClick={() =>
            handleImageContainerClick(twoselectedTheme.id)
          }
        />
        <Shape
          title={threeselectedTheme.title}
          subjectImage={threeselectedTheme.subjectImage}
          onImageContainerClick={() =>
            handleImageContainerClick(threeselectedTheme.id)
          }
        />
      </Styles.ShapeContainer>
    </Styles.BackgroundContainer>
  );
};

export default ThemePage;
