import { styled } from "styled-components";
import DalkongBG from "../../assets/images/DalkongBG.svg";

export const Container = styled.div`
  background: url(${DalkongBG});
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const GenreTitle = styled.div`
  font-size: 50px;
  padding-top: 10%;
  padding-bottom: 50px;
  font-weight: bold;
  text-align: center;
  color: black;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
  gap: 60px;
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
  object-fit: cover;
  flex-direction: column;
`;

export const OvalText = styled.div`
  font-size: 25px;
  width: 250px;
  height: 80px;
  background-color: #333;
  color: white;
  text-align: center;
  line-height: 87px;
  border-radius: 50px;
`;

export const ButtonText = styled.div`
  font-size: 25px;
  width: 250px;
  height: 80px;
  background-color: #333;
  color: white;
  text-align: center;
  line-height: 87px;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 10px;
`;
