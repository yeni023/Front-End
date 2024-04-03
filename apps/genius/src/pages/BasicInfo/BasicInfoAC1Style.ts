import styled from "styled-components";
import DalkongBG from "../../assets/images/DalkongBG.png";
import DalkongChar from "../../assets/images/DalkongChar.png";

export const Container = styled.div`
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.5)
    ),
    url(${DalkongBG});
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 100vh;
  display: flex;
`;

export const FormContainer = styled.form`
  flex-direction: column;
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  margin-left: 80px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 318px;
  height: 100px;

  background: #de839a;
  border-radius: 50px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  outline: none;
  border-width: 0;
  &:focus {
    outline: none;
    padding: 5px;
  }
  font-size: 48px;
  text-align: center;
`;

export const GenderButtonGroup = styled.div`
  margin-bottom: 10px;
  display: flex;
`;

export const GenderButton = styled.button<{ selected: boolean }>`
  width: 318px;
  height: 100px;
  background: #de839a;
  border-radius: 50px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  outline: none;
  border-width: 0;
  background-color: ${(props) =>
    props.selected ? "#de839a" : "rgba(0,0,0,0)"};
  color: ${(props) => (props.selected ? "#fff" : "#de839a")};
  border: 5px solid #de839a;
  cursor: pointer;
  font-size: 48px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &:focus {
    border: none;
    outline: none;
  }
  &:hover {
    border: 5px solid #de839a;
    outline: none;
  }
`;

export const Button = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  background: transparent;
  border: none;
  transition: transform 0.2s; /* 변형에 대한 전환 효과 추가 */

  &:active {
    transform: scale(1.1); /* 클릭시 크기를 약간 늘리는 효과 */
  }

  &:focus {
    border: none;
    outline: none;
  }
`;
export const AgeInput = styled.input`
  width: 150px;
  height: 100px;
  background: transparent; /* 배경을 투명하게 설정 */
  border: none; /* 테두리 제거 */
  border-radius: 50px;
  outline: none;
  border-width: 0;
  &:focus {
    outline: none;
  }
  font-size: 48px;
  text-align: center;
`;

export const AgeContainer = styled.div`
  width: 318px;
  height: 100px;

  background: #de839a;
  border-radius: 50px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  outline: none;
  border-width: 0;
  &:focus {
    outline: none;
    padding: 5px;
  }
  font-size: 48px;
  text-align: center;
`;

export const TextArea = styled.textarea`
  margin-bottom: 10px;
  padding: 5px;
  width: 900px;
  height: 100px;

  background: #de839a;
  border-radius: 50px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  outline: none;
  border-width: 0;
  &:focus {
    outline: none;
    padding: 5px;
  }
  font-size: 48px;
`;

export const Number = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  color: #000000;
`;

export const LeftContainer = styled.div`
  border: 5px solid #de839a;
  flex: 2.5;
`;

export const Char = styled.div`
  background-image: url(${DalkongChar});
  width: 50%;
  height: 50%;
  left: 0px;
  top: 500px;
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
`;

export const RightContainer = styled.div`
  width: 1384px;
  height: 954px;
  background: rgba(255, 255, 255, 0.5);
  border: 5px solid #de839a;
  flex: 7.5;
`;

export const EllipseButton = styled.button`
  position: absolute;
  left: 1520px;
  top: 650px;
  width: 138px;
  height: 140px;
  background: #ffffff;
  border-radius: 100px;
  outline: none;
`;

export const malpungseon = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 397px;
  height: 244px;
  left: 136px;
  top: 457px;

  background: rgba(255, 255, 255, 0.45);
  border: 4px solid #000000;
  border-radius: 50%;
  color: #000000;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
