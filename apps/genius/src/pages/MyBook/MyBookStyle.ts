// MyBookStyle.ts
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #e7e7e7;
  display: flex;
  flex-direction: column;
  align-items: center; 
`;

export const Header = styled.div`
  width: 100%;
  padding: 20px 0; 
  text-align: left; 
  font-size: 40px; 
  font-weight: 600;
  color: #000;
  position: absolute; 
  top: 15%; 
  left: 60%; 
  transform: translateX(-50%); 
`;

export const MenuContainer = styled.div`
position: relative;
  display: flex;
  justify-content: center; 
  width: 80%;
  margin-top: 260px; /* 상단 여백을 조정 */
  margin-bottom: 20px;
`;

export const MenuButton = styled.button<{ selected: boolean }>`
  background-color: ${props => (props.selected ? '#D1BA8D' : '#8DD1BD')};
  color: ${props => (props.selected ? '#fff' : '#fff')};
  padding: 20px 80px;
  font-size: 1.3em;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  border-radius: 10px;
  cursor: pointer;
  margin-right: 10px; /* 버튼 간격을 조정 */

  &:hover {
    background-color: #D1BA8D;
    color: #fff;
    border-color: #fff;
  }
`;

export const FilterContainer = styled.div`
  margin: 10px 20px;
  margin-left: -30px;
  display: flex;
  justify-content: right;
  width: 80%; /* 가운데 정렬 후, 해당 컨테이너의 width를 줄여서 화면 오른쪽으로 이동 */
`;

export const FilterSelect = styled.select`
  padding: 10px 30px;
  font-size: 1.2em; 
  font-weight: medium;
  border-color: #D9D9D9;
  cursor: pointer;
  background-color: #D9D9D9;
`;

export const BookList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4열로 설정 */
  grid-gap: 40px; /* 각 아이템 사이의 간격 */
  justify-content: center;
  a:link {
    color: #000;
    text-decoration: none;
  }
  a:visited {
    color: #000;
    text-decoration: none;
  }
`;

export const BookItem = styled.div`
  width: 200px;
  text-align: center;
  margin: 40px;
  white-space: nowrap;

  &:hover {
    opacity: 0.8;
  }
`;

export const BookTitle = styled.div`
  width: calc((100% - 100px) / 4);
  margin-top: 10px;
  font-size: 1.2em;
  color: #000;
  margin-left: 60px;
  text-align: center;
 ;

  a:hover {
    color: #000;
    text-decoration: underline;
  }
`;