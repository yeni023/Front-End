import { styled } from "styled-components";
import DalkongBG from "../../assets/images/DalkongBG.svg";
import DalkongBook from "../../assets/images/DalkongBook.svg";
import photo from "../../assets/images/MakeBookPhoto.svg";
import TextPhoto from "../../assets/images/TextImage.svg";
import SaveIcon from "../../assets/images/Save.svg";
import ContinueIcon from "../../assets/images/Continue.svg";
export const Container = styled.div`
  position: relative;
  background-image: url(${DalkongBG});
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 100vh;
`;

export const BookImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 10%;
`;

export const BookImage = styled.div`
  background-image: url(${DalkongBook});
  background-position: center;
  width: 1300px;
  height: 700px;
  position: relative;
`;

export const TextBoxContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 10%;
`;

export const TextBox = styled.div`
  position: absolute;
  top: -240%;
  right: 19%;
  transform: translateY(-30%);
  color: black;
  font-size: 28px;
  font-weight: bold;
  /* font-family: 'Roboto', sans-serif; */
  line-height: 2;
  text-align: center;
  background-color: white;
  border: 3px solid #aa528e;
  padding: 30px;
  width: 450px;
  height: 500px;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ImageTextBox = styled.div`
  position: absolute;
  bottom: 600px;
  left: 620px;
  transform: translateX(-48%);
  padding: 10px 20px;
  background-color: white;
  border: 3px solid #aa528e;
  padding: 30px;
  width: 500px;
  height: 340px;
  z-index: 10;
`;

export const ImageButton = styled.div`
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  color: white;
  background-image: url(${photo});
  background-size: 200px, 150px;
  background-position: center;
  background-color: rgba(255, 255, 255, 0.34);
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 450px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:hover {
    background-color: #a2b2dc;
  }
`;

export const TextImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 10%;
  position: relative;
`;

export const TextImage = styled.div`
  background-image: url(${TextPhoto});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 500px;
  height: 100px;
  position: absolute;
  top: -355px;
  left: 380px;
`;

export const CustomButton = styled.button`
  position: fixed;
  top: 40px;
  right: 30px;
  z-index: 100;
  padding: 70px;
  background-color: transparent;
  background-image: url(${SaveIcon});
  background-size: contain;
  background-repeat: no-repeat;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  &:focus {
    outline: none;
    border: none;
  }
`;

export const CustomButton2 = styled.button`
  position: fixed;
  top: 40px;
  right: 190px;
  z-index: 100;
  padding: 70px;
  background-color: transparent;
  background-image: url(${ContinueIcon});
  background-size: contain;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  &:focus {
    outline: none;
    border: none;
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 100;
  display: flex;
  flex-direction: row;
`;
