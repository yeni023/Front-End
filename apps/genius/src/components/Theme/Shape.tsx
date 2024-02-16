// Shape.tsx
import React from "react";
import * as Styles from "./ShapeStyle";

interface ShapeProps {
  title: string;
  subjectImage: string;
  isSelected: boolean;
  onClick: () => void;
}

const Shape: React.FC<ShapeProps> = ({
  title,
  subjectImage,
  isSelected,
  onClick
}) => {
  return (
    <Styles.Container>
      <Styles.Glass>
        <div onClick={onClick}>
          {isSelected ? (
            <Styles.FlowerContainer>
              <Styles.Title>{title}</Styles.Title>
              <Styles.ImageContainer
                style={{ backgroundImage: `url(${subjectImage})` }}
              />
            </Styles.FlowerContainer>
          ) : (
            <Styles.SproutContainer>
              <Styles.Title>{title}</Styles.Title>
              <Styles.ImageContainer
                style={{ backgroundImage: `url(${subjectImage})` }}
              />
            </Styles.SproutContainer>
          )}
        </div>
      </Styles.Glass>
      <Styles.Shadow />
    </Styles.Container>
  );
};

export default Shape;
