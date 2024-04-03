// ThemePage.tsx
import React, { useState } from "react";
import styled from "styled-components";
import Shape from "../components/Theme/Shape";
import subject_image01 from "../images/subject_image01.png";
import subject_image02 from "../images/subject_image02.png";
import subject_image03 from "../images/subject_image03.png";
import dalcong_bg from "../images/dalcong_bg.png";

const BackgroundContainer = styled.div`
  background: url(${dalcong_bg});
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ShapeContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

const Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 50px;
`;

const ThemePage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleShapeClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      <BackgroundContainer>
        <Title>주제가 될 새싹을 골라볼까?</Title>
        <ShapeContainer>
          <Shape
            title="동물 친구들의 모험"
            image={subject_image01}
            onClick={() => handleShapeClick(0)}
            isActive={activeIndex === 0}
          />
          <Shape
            title="우주 여행 이야기"
            image={subject_image02}
            onClick={() => handleShapeClick(1)}
            isActive={activeIndex === 1}
          />
          <Shape
            title="요정과 마법 세계"
            image={subject_image03}
            onClick={() => handleShapeClick(2)}
            isActive={activeIndex === 2}
          />
        </ShapeContainer>
      </BackgroundContainer>
    </>
  );
};

export default ThemePage;
