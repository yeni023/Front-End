import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Styles from './SelectCharStyle';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SelectChar: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);
  const [userId, setUserId] = useState<number | null>(null);
  const [draftId, setDraftId] = useState<number | null>(1);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      setUserId(user.userId);
    } else {
      toast.error('로그인 정보가 필요합니다.');
      navigate('/login');
    }
  }, [navigate]);

  const handleCharacterSelection = async (character: string) => {
    if (userId === null || draftId === null) {
      toast.error('로그인 정보와 초안 ID가 필요합니다.');
      return;
    }

    const introMode = character === 'alKong' ? 0 : 1;
    const subject = character === 'alKong' ? 'alKong' : 'dalKong';
    const introContent = character === 'alKong' ? '알콩이 동화 내용' : '달콩이 동화 내용';

    const formData = {
      draft: draftId,
      user: userId,
      introMode,
      subject,
      IntroContent: introContent
    };

    try {
      const apiUrl = 'http://localhost:8000/genius/intro/';
      const response = await axios.post(apiUrl, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      toast.success(`동화 만들기 시작!`, {
        onClose: () => navigate('/Tutorial')
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(`서버 오류가 발생했습니다: ${error.response?.data.message || error.message}`);
      } else {
        toast.error('서버 오류가 발생했습니다. 다시 시도해주세요.');
      }
    }
  };

  return (
    <Styles.AppContainer>
      <Styles.CharacterContainer
        id="character1"
        className={selectedCharacter === 'alKong' ? 'selected' : ''}
        onClick={() => {
          setSelectedCharacter('alKong');
          handleCharacterSelection('alKong');
        }}
      >
        <Link to="/AlkongTutorial">
          <Styles.CharacterImage src='./src/assets/images/alkongcharacter.png' alt="알콩이 이미지" />
          <Styles.Description className="description">
          <Styles.Highlight2>질문</Styles.Highlight2>에 대한 <Styles.Highlight2>선택지</Styles.Highlight2>를 고르며 동화를 제작해요.
          </Styles.Description>          
          <Styles.AlKongButton isAlKong={selectedCharacter === 'alKong'}>
            알콩이와 동화만들기
          </Styles.AlKongButton>
        </Link>
      </Styles.CharacterContainer>
      <Styles.CharacterContainer
        id="character2"
        className={selectedCharacter === 'dalKong' ? 'selected' : ''}
        onClick={() => {
          setSelectedCharacter('dalKong');
          handleCharacterSelection('dalKong');
        }}
      >
        <Link to="/DalkongTutorial">
          <Styles.CharacterImage src='./src/assets/images/dalkongcharacter.png' alt="달콩이 이미지" />
          <Styles.Description className="description">
  <Styles.Highlight1>AI</Styles.Highlight1>와 함께 <Styles.Highlight1>채팅</Styles.Highlight1>을 진행하며 동화를 제작해요.
</Styles.Description>
          <Styles.DalKongButton isAlKong={selectedCharacter === 'dalKong'}>
            달콩이와 동화만들기
          </Styles.DalKongButton>
        </Link>
      </Styles.CharacterContainer>
      <Navbar />
      <ToastContainer />
    </Styles.AppContainer>
  );
};

export default SelectChar;
