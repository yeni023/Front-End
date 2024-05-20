//// ShapeStyle.ts
import styled from "styled-components";
import sprout from "../../assets/images/sprout.png";
import flower from "../../assets/images/Flower.png";

export const Container = styled.div`
  position: relative;
`;

export const Glass = styled.div`
  box-sizing: border-box;
  width: 400px;
  height: 467.01px;
  border: 10px solid #ffffff;
  border-radius: 400px 400px 0px 0px;
  background: rgba(255, 255, 255, 0.34);
`;

export const Shadow = styled.div`
  position: absolute;
  bottom: -65.81px;
  width: 400px;
  height: 65.81px;
  background: linear-gradient(180deg, #abe1d1 0%, rgba(171, 225, 209, 0) 100%);
`;
export const SproutContainer = styled.div`
  background: url(${sprout});
  background-repeat: no-repeat;
  background-size: cover;
  width: 199px;
  height: 235px;
  position: relative;
  top: 65px;
  left: 80px;
`;

export const FlowerContainer = styled.div`
  background: url(${flower});
  background-repeat: no-repeat;
  background-size: cover;
  width: 290px;
  height: 305px;
  position: relative;
  top: 3px;
  left: 40px;
`;

export const ImageContainer = styled.button`
  width: 371px;
  height: 268px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-sizing: border-box;
  position: relative;
  top: 27px;
  left: 4.4px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  border: none;
`;

export const Title = styled.p`
  width: 380px;
  height: 146px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
