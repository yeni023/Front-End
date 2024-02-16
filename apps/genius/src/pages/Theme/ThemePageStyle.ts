import styled from "styled-components";

import dalcong_bg from "../../assets/images/dalcong_bg.png";

export const BackgroundContainer = styled.div`
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

export const ShapeContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

export const Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 50px;
`;
export const Regenarate = styled.button`
  position: absolute;
  width: 138px;
  height: 140px;
  left: 1709px;
  top: 862px;
  border-radius: 100px;
  background: #e3d3d3;
`;
