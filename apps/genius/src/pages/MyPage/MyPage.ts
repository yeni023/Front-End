import styled from 'styled-components';
import SeedNum from "../../assets/images/SeedNum.svg";
import MyPageBook from "../../assets/images/MyPageBook.svg";
import MyPageFlower from "../../assets/images/MyPageFlower.svg";
import MyPageForest from "../../assets/images/MyPageForest.svg";

export const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
`;

export const TopBar = styled.div`
  background-color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 2;
`;

export const Logo = styled.img`
  height: 50px;
`;

export const NavButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e1e1e1;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

type ImageSectionProps = {
  bgImage: string;
};

export const ImageSection = styled.div<ImageSectionProps>`
  background-image: url('${props => props.bgImage}');
  background-size: cover;
  background-position: left center;
  background-repeat: no-repeat;
  width: 30vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 28vh;
`;

export const TopButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const BottomButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 60px;
`;

export const ColorSection = styled.div`
  background-color: #ACD9CB;
  width: 70vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 155px;
  position: relative;
`;

type ProfileButtonProps = {
  image: string;
};

export const ProfileButton = styled.button<ProfileButtonProps>`
  background-image: url('${props => props.image}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  border: 8px solid white;
  width: 250px;
  height: 250px;
  cursor: pointer;
  margin-bottom: -5px;
  transform: translateY(-30%);
  outline: none;
  user-select: none;

  &:focus {
    box-shadow: 0 0 0 2px #ACD9CB;  // 포커스 시 보더 쉐도우 효과
  }
`;

export const NameButton = styled.button`
  background-color: #FFFFFF;
  color: #333;
  border: 5px solid #ACD9CB;
  border-radius: 20px;
  padding: 15px 30px;
  font-size: 27px;
  font-weight: bold;
  cursor: pointer;
  width: 300px;
  text-align: center;
  margin-bottom: 30px;
`;

export const IDButton = styled.button`
  background-color: #FFFFFF;
  color: #333;
  border: 5px solid #ACD9CB;
  border-radius: 20px;
  padding: 15px 30px;
  font-size: 27px;
  font-weight: bold;
  cursor: pointer;
  width: 300px;
  text-align: center;
  margin-bottom: 20px;
`;

export const SocialButton = styled.button`
    width: 140px;
    height: 40px;
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center; 
`;

export const SocialImage = styled.img`
    width: 100%;
    height: auto;
`;

export const SocialButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  width: 100%;
  margin-top: 40px;
`;

export const SeedNumButton = styled(SocialButton)`
  background-image: url(${SeedNum});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 400px;
  height: 200px;
  transform: translateX(-11%);
  margin-top: 30px;
`;

export const BookButton = styled.button`
  background-image: url(${MyPageBook});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 600px;
  height: 400px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  display: block;
  margin: 0 20px;
  padding: 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  outline: none;

  &:hover {
    transform: scale(1.05);  // Slightly increase size
    box-shadow: 0 4px 20px rgba(0,0,0,0.25);  // Add shadow for depth
  }
`;

export const FlowerButton = styled.button`
  background-image: url(${MyPageFlower});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 600px;
  height: 400px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  display: block;
  margin: 0 20px;
  padding: 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: scale(1.05);  // Slightly increase size
    box-shadow: 0 4px 20px rgba(0,0,0,0.25);  // Add shadow for depth
  }
`;

export const ForestButton = styled.button`
  background-image: url(${MyPageForest});
  background-size: 113% 113%;
  background-position: center;
  background-repeat: no-repeat;
  width: 1250px;
  height: 400px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  display: block;
  margin: 20px auto;
  padding: 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: scale(1.05);  // Slightly increase size
    box-shadow: 0 4px 20px rgba(0,0,0,0.25);  // Add shadow for depth
  }
`;
