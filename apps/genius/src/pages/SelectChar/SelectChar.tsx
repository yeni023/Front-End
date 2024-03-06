// SelectChar.tsx

import React, { useState } from 'react';
import * as Styles from './SelectCharStyle';

const SelectChar: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);

  const goToCharacterPage = (character: string) => {
    setSelectedCharacter(character);
  };

  return (
    <Styles.AppContainer>
      <Styles.CharacterContainer
        id="character1"
        className={selectedCharacter === 'alKong' ? 'selected' : ''}
        onClick={() => goToCharacterPage('alKong')}
      >
        <Styles.AlKongButton
          onClick={() => goToCharacterPage('alKong')}
          isAlKong={selectedCharacter === 'alKong'}
        >
          알콩이와 동화만들기
        </Styles.AlKongButton>
      </Styles.CharacterContainer>
      <Styles.CharacterContainer
        id="character2"
        className={selectedCharacter === 'dalKong' ? 'selected' : ''}
        onClick={() => goToCharacterPage('dalKong')}
      >
        <Styles.DalKongButton
          onClick={() => goToCharacterPage('dalKong')}
          isAlKong={selectedCharacter === 'dalKong'}
        >
          달콩이와 동화만들기
        </Styles.DalKongButton>
      </Styles.CharacterContainer>
    </Styles.AppContainer>
  );
};

export default SelectChar;
