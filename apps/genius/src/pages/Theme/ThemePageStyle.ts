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
  left: 1700px;
  top: 780px;
  border-radius: 100px;
  background: #e3d3d3;
`;
export const RegenarateImg = styled.img`
  width: 70px;
  height: 70px;
`;

export const OkBtn = styled.button`
  display: flex;
  justify-content: center;

  width: 328px;
  height: 54px;

  background: rgba(217, 217, 217, 0.3);
  border-radius: 20px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 0px;
  text-align: center;

  color: rgba(255, 255, 255, 0.76);
`;
export const NoBtn = styled.button`
  display: flex;
  justify-content: center;

  width: 328px;
  height: 54px;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 20px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 0px;
  text-align: center;

  color: rgba(255, 255, 255, 0.76);
  margin-left: 130px;
`;
export const BtnContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 40px;
`;
export const JustPadding = styled.div`
  height: 94px;
`;
