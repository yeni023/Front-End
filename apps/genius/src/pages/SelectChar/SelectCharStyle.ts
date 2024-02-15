import styled from 'styled-components';


export const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100vh;
  width: 100vw; 
`;

export const CharacterContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%; 

  &:nth-child(1) {
    background: #7EC7B1;
  }

  &:nth-child(2) {
    background: purple;
  }
`;

export const CharacterButton = styled.button`
  font-size: 100px;
  font-weight: bold;
  padding: 100px;
  border-radius: 50px;
  border: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: translateY(2px);
    box-shadow: 0 0 rgba(0, 0, 0, 0);
  }
`;

export const AlKongButton = styled(CharacterButton)`
  background-color: #ffffff;
  color: #7EC7B1;
`;

export const DalKongButton = styled(CharacterButton)`
  background-color: #ffffff;
  color: #D057A9;
`;
