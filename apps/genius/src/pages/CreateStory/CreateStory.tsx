import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Styles from './CreateStoryStyle';
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; // ToastContainer와 toast를 추가
import 'react-toastify/dist/ReactToastify.css'; // 스타일 추가

const CreateStory: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [writerName, setWriterName] = useState('');
  const [userId, setUserId] = useState<number | null>(null); // 사용자 ID를 관리하는 상태 추가
  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate 훅 사용

  useEffect(() => {
    // 로그인된 사용자 정보를 localStorage에서 가져옴
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      setUserId(user.id);
    } else {
      toast.error('로그인 정보가 필요합니다.'); // toast 사용하여 오류 메시지 표시
      navigate('/login'); // 로그인 페이지로 이동
    }
  }, [navigate]);

  const updateWriterName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWriterName(event.target.value);
  };

  const showGreeting = async () => {
    const trimmedWriterName = writerName.trim();
    if (trimmedWriterName === '') {
      toast.error('작가명을 입력하세요!'); // toast 사용하여 오류 메시지 표시
      return;
    }

    if (userId === null) {
      toast.error('로그인 정보가 필요합니다.'); // toast 사용하여 오류 메시지 표시
      return;
    }

    const formData = {
      writer: trimmedWriterName,
      user: userId
    };

    try {
      const apiUrl = 'http://localhost:8000/genius/draft/';
      const response = await axios.post(apiUrl, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('서버 응답:', response.data);
      // 환영 메시지 표시
      toast.success(`환영합니다 ${trimmedWriterName}님!`, {
        onClose: () => navigate('/Tutorial') // 알림이 닫히면 페이지 이동
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('서버 오류:', error.response?.data);
        toast.error(`서버 오류가 발생했습니다: ${error.response?.data}`);
      } else {
        console.error('예상치 못한 오류:', error);
        toast.error('서버 오류가 발생했습니다. 다시 시도해주세요.');
      }
    }
  };

  const handleInputContainerTransitionEnd = () => {
    setLoaded(true);
  };

  if (userId === null) {
    return <div>로그인 정보를 확인하는 중...</div>;
  }

  return (
    <div>
      <Navbar />
      <Styles.Container className={`content-container ${loaded ? 'loaded' : ''}`}>
        <Styles.InputContainer
          className={`input-container ${loaded ? 'loaded' : ''}`}
          onTransitionEnd={handleInputContainerTransitionEnd}
        >
          <p>
            안녕하세요 <Styles.GreetingText>{writerName || '__________'}</Styles.GreetingText> 님!
          </p>
          <p style={{ marginBottom: 0 }}>
            동화를 만들 작가님의 이름을 입력해주세요.
          </p>
          <Styles.NicknameInput
            type="text"
            id="writerInput"
            placeholder="작가명을 입력하세요"
            value={writerName}
            onChange={updateWriterName}
          />
          
          <div>
            <Styles.SubmitBtn id="submitBtn" onClick={showGreeting}>
              제출하기
            </Styles.SubmitBtn>
          </div>
        </Styles.InputContainer>
      </Styles.Container>
      <ToastContainer /> {/* ToastContainer 추가 */}
    </div>
  );
};

export default CreateStory;
