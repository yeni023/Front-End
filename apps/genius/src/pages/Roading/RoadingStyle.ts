// BasicInfoStyle.tsx
import styled from "styled-components";
import DalkongBG from "../../assets/images/DalkongBG.svg";
import AlkongBG from "../../assets/images/AlkongBG.svg";
import dalkongcharacter from "../../assets/images/dalkongcharacter.png";
import alkongcharacter from "../../assets/images/alkongcharacter.png";

export const AContainer = styled.div`
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    url(${AlkongBG});
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;
export const DContainer = styled.div`
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    url(${DalkongBG});
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const AC = styled.div`
  background-image: url(${dalkongcharacter});
  background-size: cover;
  background-position: center;
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: absolute;

  top: 520px;
`;

export const DC = styled.div`
  background-image: url(${alkongcharacter});
  background-size: cover;
  background-position: center;
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: absolute;

  top: 520px;
`;

export const Label = styled.label`
  box-sizing: border-box;

  width: 600px;
  height: 400px;

  background: rgba(255, 255, 255, 0.81);
  border: 4px solid #000000;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;

  top: 250px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 60px;
  text-align: center;

  color: #000000;

  background: rgba(255, 255, 255, 0.81);
  border: 4px solid #000000;
  border-radius: 50%;
  padding: 65px; // 내부 여백을 추가하여 텍스트가 적절히 줄바꿈되도록 함
  white-space: pre-wrap; /* 이 부분을 추가하세요 */
`;
