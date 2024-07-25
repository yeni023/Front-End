import React, { useState } from "react";
import axios from 'axios';
import * as ServiceStyle from './InquiryFormStyle'; // 변경된 경로
import Navbar from "../Navbar/Navbar";

const InquiryForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [question, setQuestion] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // 사용자 정보 로드 (예시로 로컬 스토리지에서 로드)
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const userId = user.id; // 로컬 스토리지에 저장된 사용자 ID 가져오기

    // 필요한 데이터 형식에 맞게 formData 구성
    const formData = {
      draft: title,  // 여기서 title을 draft로 사용합니다.
      user: userId,
      feedCap: title,
      feedContent: question
    };

    console.log('제출된 질문:', formData);

    try {
      const response = await axios.post('http://localhost:8000/genius/feedback/', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('문의가 성공적으로 제출되었습니다:', response.data);
      alert('문의가 성공적으로 제출되었습니다.');
      // 폼 초기화
      setTitle('');
      setAuthor('');
      setQuestion('');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('문의 제출에 실패했습니다:', error.response?.data || error.message);
        alert(`문의 제출에 실패했습니다: ${error.response?.data.message || error.message}`);
      } else {
        console.error('문의 제출에 실패했습니다:', error);
        alert('문의 제출에 실패했습니다. 다시 시도해주세요.');
      }
    }
  };

  return (
    <>
      <Navbar />
      <ServiceStyle.Container>
        <h2>1:1 문의 접수</h2>
        <form onSubmit={handleSubmit}>
          <ServiceStyle.InputGroup>
            <ServiceStyle.InputLabel>제목</ServiceStyle.InputLabel>
            <ServiceStyle.InputField
              type="text"
              placeholder="제목을 입력하세요"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </ServiceStyle.InputGroup>
          <ServiceStyle.InputGroup>
            <ServiceStyle.InputLabel>작성자</ServiceStyle.InputLabel>
            <ServiceStyle.InputField
              type="text"
              placeholder="작성자를 입력하세요"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
            />
          </ServiceStyle.InputGroup>
          <ServiceStyle.InputGroup>
            <ServiceStyle.InputLabel>문의 내용</ServiceStyle.InputLabel>
            <ServiceStyle.TextArea
              placeholder="문의 내용을 입력하세요"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
            />
          </ServiceStyle.InputGroup>
          <ServiceStyle.SubmitButton type="submit">등록하기</ServiceStyle.SubmitButton>
        </form>
      </ServiceStyle.Container>
    </>
  );
};

export default InquiryForm;
