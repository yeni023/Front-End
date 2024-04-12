import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

// 서브메뉴 슬라이드 애니메이션
const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Navbar = styled.div`
  background-color: #fff;
  width: 100%;
  height: 90px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: large;
`;

export const MainMenu = styled.div`
  display: flex;
  margin-left: 8px;
  top: 4px;
  align-items: center;
  padding: 18px 18px;
  white-space: nowrap;
  gap: 145px;
  position: relative; /* 메인 메뉴에 상대적으로 위치 지정 */
`;

export const MenuItem = styled.div`
  position: relative;
  text-decoration: none;
  color: #9d9d9d;
  display: block;
  font-size: 23px;
  padding: 20px 25px;
  cursor: pointer;

  &:hover {
    color: #42655B;
  }
`;

export const SubMenu = styled.div`
  position: absolute;
  top: 76px;
  left: -6px;
  width: 150px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  overflow: hidden;
  animation: ${slideDown} 0.4s ease forwards;
  opacity: 0;
  display: none; /* 초기에는 서브메뉴를 보이지 않도록 설정 */

  ${MenuItem}:hover & {
    display: inline-block; /* 메인 메뉴를 호버했을 때만 서브메뉴를 보이도록 설정 */
    opacity: 1;
  }
`;

export const SubMenuItem = styled(Link)`
  display: block;
  padding: 15px;
  color: #000;
  text-align: center;
  text-decoration: none;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f0f0f0;
    font-weight: bold;
  }
`;

export const LoginSignupButton = styled.button`
  color: #9D9D9D;
  background-color: #fff;
  border-color: #9D9D9D;
  border-width: 1px;
  padding: 8px 16px;
  margin-left: 5px;
  margin-right: 30px;

  &:hover {
    background-color: #fff;
    color: #000;
    border-color: #9D9D9D;
  }
`;