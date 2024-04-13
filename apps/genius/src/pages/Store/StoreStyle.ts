import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e7e7e7;
  display: flex;
  justify-content: center;
  align-items: flex-start; /* 세로 정렬을 상단으로 조정 */
  padding-top: 20px; 
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  color: #000;
  position: absolute;
  top: 15%; 
  left: 60px; 
`;

export const ItemBox = styled.div`
  display: flex;
  flex-wrap: wrap; /* 여러 줄에 걸쳐 나열 */
  justify-content: space-around; /* 간격을 균등하게 배치 */
  width: calc(33.33% - 20px);
  align-items: center;
  margin-top: 230px;
  margin-left: 80px;
  margin-right: 80px;
  background: #fff;
  border-radius: 15px;
  padding: 20px 40px;
  margin-bottom: 40px;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const Seeds = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Price = styled.span`
  font-size: 24px;
  margin-top: 10px;
  background-color: #e7e7e7;
  border-radius: 15px;
  padding: 10px 30px;
  cursor: pointer;

  &:hover {
    font-weight:bold;
  }
`;
