import { styled } from "styled-components";

export const Container = styled.div`
  background-color: #E28A8D;
  width: 100%;
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const SelectLevelTitle = styled.div`
  font-size: 50px;
  padding-top: 10%;
  padding-bottom: 50px;
  font-weight: bold;
  text-align: center;
  color: white;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
`;

export const ImageTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  margin-left: 30px;
`;

export const Arrow_Image = styled.img`
  height: 150px;
  padding-top: 40px;
  object-fit: cover; /* 이미지 비율 유지 */
`;

export const ArrowButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover; /* 이미지 비율 유지 */
`;

export const LevelButton = styled.button<{ bgImage: string }>`
  background-color: rgba(255, 255, 255, 0.34);
  border: 8px solid white;
  color: black;
  font-size: 130px; 
  margin: 25px; 
  cursor: pointer;
  transition: background-color 0.3s;
  width: 450px;
  height: 550px;
  text-align: center;
  background-image: url(${props => props.bgImage});
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 35px;
  margin-top: -5px;
  margin-right: 25px;
  margin-bottom: 25px;
  margin-left: 25px;


  &:hover {
    background-color: #e0e0e0; /* 마우스 오버시 배경색 변경 */
  }
`;
