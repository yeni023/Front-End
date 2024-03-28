import { styled } from "styled-components";

export const Container = styled.div`
  background-color: white;
  width: 100%;
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

export const GenreTitle = styled.div`
  font-size: 50px;
  padding-top: 20%;
  padding-bottom: 50px;
  font-weight: bold;
  text-align: center;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
`;

export const ImageTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  margin-left: 30px;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  margin-right: 50px;
  margin-left: 50px;
  object-fit: cover; /* 이미지 비율 유지 */
  flex-direction: column;
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

export const OvalText = styled.div`
  font-size: 25px;
  width: 250px; /* 타원형의 너비 */
  height: 80px; /* 타원형의 높이 */
  background-color: #333; /* 배경색 */
  color: white; /* 텍스트 색상 */
  text-align: center; /* 텍스트 가운데 정렬 */
  line-height: 87px;
  border-radius: 50px;
`;
