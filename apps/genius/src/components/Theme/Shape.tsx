// Shape.tsx
import React, { useState, useEffect } from "react";
import * as Styles from "./ShapeStyle";

interface ShapeProps {
  title: string;
  subjectImage: string;
  onImageContainerClick: () => void;
  delay: number;
}

const Shape: React.FC<ShapeProps> = ({
  title,
  subjectImage,
  onImageContainerClick,
  delay
}) => {
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Styles.Container>
      <Styles.Glass>
        <Styles.Title>{title}</Styles.Title>
        <Styles.SproutContainer show={!showButton} />
        <Styles.ImageContainer
          style={{ backgroundImage: `url(${subjectImage})` }}
          onClick={onImageContainerClick}
          show={showButton}
        />
      </Styles.Glass>
      <Styles.Shadow />
    </Styles.Container>
  );
};

export default Shape;
