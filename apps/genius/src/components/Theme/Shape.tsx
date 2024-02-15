// Shape.tsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import sprout from "../../images/sprout.png";
import flower from "../../images/flower.png";

const Container = styled.div`
  position: relative;
`;

const Glass = styled.div`
  box-sizing: border-box;
  width: 400px;
  height: 467.01px;
  border: 10px solid #ffffff;
  border-radius: 400px 400px 0px 0px;
  background: rgba(255, 255, 255, 0.34);
`;

const Shadow = styled.div`
  position: absolute;
  bottom: -65.81px;
  width: 400px;
  height: 65.81px;
  background: linear-gradient(180deg, #abe1d1 0%, rgba(171, 225, 209, 0) 100%);
`;

const SproutContainer = styled.div`
  background: url(${sprout});
  background-repeat: no-repeat;
  background-size: cover;
  width: 199px;
  height: 235px;
  position: relative;
  top: 29px;
  left: 80px;
`;

const FlowerContainer = styled.div`
  background: url(${flower});
  background-repeat: no-repeat;
  background-size: cover;
  width: 199px;
  height: 235px;
  position: relative;
  top: 29px;
  left: 80px;
`;

const ImageContainer = styled.button`
  width: 371px;
  height: 268px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-sizing: border-box;
  position: relative;
  top: -10px;
  left: 4.4px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  border: none;
`;

const Title = styled.p`
  width: 380px;
  height: 130px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  margin-bottom: 17px;
  text-align: center;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

interface ShapeProps {
  title: string;
  image: string;
  onClick: () => void;
  isActive: boolean;
}

const Shape: React.FC<ShapeProps> = ({ title, image, onClick, isActive }) => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowImage(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Container>
      <Glass>
        <Title>{title}</Title>
        {showImage ? (
          isActive ? (
            <FlowerContainer />
          ) : (
            <ImageContainer
              onClick={onClick}
              style={{ backgroundImage: `url(${image})` }}
            />
          )
        ) : (
          <SproutContainer />
        )}
      </Glass>
      <Shadow />
    </Container>
  );
};

export default Shape;