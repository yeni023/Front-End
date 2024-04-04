import styled from "styled-components";

export const ChoiceButton = styled.button`
  display: block;
  margin-bottom: 10px;
  background: #b5e4f8;
  border: 4px solid #000000;
  border-radius: 60px;
  color: #000000;
  padding: 8px 12px;
  font-size: 40px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  /* Rectangle 31 */
  width: 556px;
  height: 81px;

  &:hover {
    border: 4px solid #05ff00;
  }
`;

export const ChoiceContainer = styled.div`
  /* Rectangle 65 */
  width: 623px;
  height: 361px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 30px;

  /* 세로 중앙 정렬을 위한 스타일 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
