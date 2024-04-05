import styled from "styled-components";

export const ChoiceButton = styled.button`
  display: block;
  margin: 6px;

  background: #b5e4f8;
  color: #333;
  color: #000000;
  font-size: 20px;

  width: 380px;
  height: 50px;

  &:hover {
    border: 4px solid #05ff00;
  }
`;

export const ChoiceContainer = styled.div`
  /* Rectangle 65 */
  width: 400px;
  height: 200px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  /* 세로 중앙 정렬을 위한 스타일 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
`;
