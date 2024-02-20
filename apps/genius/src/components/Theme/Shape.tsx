// Shape.tsx
import React, { useState, useEffect } from "react";
import * as Styles from "./ShapeStyle";

interface ShapeProps {
  title: string;
  subjectImage: string;
  onImageContainerClick: () => void; // 클릭 이벤트 핸들러 prop 추가
}

const Shape: React.FC<ShapeProps> = ({
  title,
  subjectImage,
  onImageContainerClick
}) => {
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Styles.Container>
      <Styles.Glass>
        <Styles.Title>{title}</Styles.Title>
        {showButton ? (
          <Styles.ImageContainer
            style={{ backgroundImage: `url(${subjectImage})` }}
            onClick={onImageContainerClick} // 클릭 이벤트 핸들러 추가
          />
        ) : (
          <Styles.SproutContainer />
        )}
      </Styles.Glass>
      <Styles.Shadow />
    </Styles.Container>
  );
};

export default Shape;
