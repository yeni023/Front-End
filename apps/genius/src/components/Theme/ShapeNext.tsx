import React from "react";
import * as Styles from "./ShapeStyle";

interface ShapeNextProps {
  isFlower: boolean;
}

const ShapeNext: React.FC<ShapeNextProps> = ({ isFlower }) => {
  return (
    <div>
      <Styles.Container>
        <Styles.Glass>
          <Styles.Title></Styles.Title>
          {isFlower ? <Styles.FlowerContainer /> : <Styles.SproutContainer />}
        </Styles.Glass>
        <Styles.Shadow />
      </Styles.Container>
    </div>
  );
};

export default ShapeNext;
