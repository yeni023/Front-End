import React, { useState } from 'react';
import * as Styles from "./SelectCharStyle"; 
import SelectQuestion from './SelectQuestion'; // SelectQuestion 컴포넌트 import

interface CharacterButtonProps {
  character: string;
  onClick: () => void;
}

const CharacterButton: React.FC<CharacterButtonProps> = ({ character, onClick }) => {
  return (
    <button
      className={`characterButton ${character === 'alKong' ? 'alKong' : 'dalKong'}`}
      onClick={onClick}
    >
      {character === 'alKong' ? '알콩이와 동화만들기' : '달콩이와 동화만들기'}
    </button>
  );
};

const SelectChar: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);

  const goToCharacterPage = (character: string) => {
    setSelectedCharacter(character);
  };

  return (
    <Styles.AppContainer>
      <Styles.CharacterContainer id="character1" onClick={() => goToCharacterPage('alKong')}>
        <CharacterButton character="alKong" onClick={() => goToCharacterPage('alKong')} />
      </Styles.CharacterContainer>
      <Styles.CharacterContainer id="character2" onClick={() => goToCharacterPage('dalKong')}>
        <CharacterButton character="dalKong" onClick={() => goToCharacterPage('dalKong')} />
      </Styles.CharacterContainer>

      {/* 조건부 렌더링 */}
      {selectedCharacter === 'dalKong' && <SelectQuestion />}
    </Styles.AppContainer>
  );
};

export default SelectChar;