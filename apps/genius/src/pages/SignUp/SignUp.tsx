import React, { useState } from 'react';
import axios from 'axios';
import * as SignUpStyle from './SignUpStyle';
import Navbar from '../Navbar/Navbar';

const SignUp: React.FC = () => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTermsRequired, setAgreeTermsRequired] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [isSignUpComplete, setIsSignUpComplete] = useState(false);

  const handleSignUp = async () => {
    if (!nickname || !email || !password || !confirmPassword) {
      alert('기본 가입 정보를 모두 입력해주세요.');
      return;
    }

    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    if (!agreeTermsRequired || !agreePrivacy) {
      alert('모든 약관에 동의해야 합니다.');
      return;
    }

    const formData = {
      nickname,
      email,
      password,
      confirm_password: confirmPassword,
      agree_terms_required: agreeTermsRequired,
      agree_privacy: agreePrivacy
    };

    console.log('Sending formData:', formData);
  
    try {
      const response = await axios.post('http://localhost:8000/genius/members/', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('회원가입 성공:', response.data);
      
      // 회원가입 성공 시 사용자 정보를 로컬 스토리지에 저장
      localStorage.setItem('user', JSON.stringify({ email }));

    setIsSignUpComplete(true);

    // 회원가입 완료 후 페이지 이동
    window.location.href = '/MainHome';
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('회원가입에 실패했습니다:', error.response?.data || error.message);
        alert(`회원가입에 실패했습니다: ${error.response?.data.message || error.message}`);
      } else {
        console.error('회원가입에 실패했습니다:', error);
        alert('회원가입에 실패했습니다. 다시 시도해주세요.');
      }
    }
  };

  return (
    <SignUpStyle.Container>
      <Navbar />
      <h1>{isSignUpComplete ? '회원가입 완료' : '회원가입'}</h1>
      {isSignUpComplete ? (
        <p>회원가입이 완료되었습니다. 환영합니다!</p>
      ) : (
        <>
          <SignUpStyle.Divider />
          <SignUpStyle.Form>
            <SignUpStyle.Row>
              <SignUpStyle.Label>이메일　　　　</SignUpStyle.Label>
              <SignUpStyle.Input
                type="email"
                placeholder="이메일 (예 : abc1234@naver.com)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </SignUpStyle.Row>
            <SignUpStyle.Row>
              <SignUpStyle.Label>비밀번호　　　</SignUpStyle.Label>
              <SignUpStyle.Input
                type="password"
                placeholder="4~12자의 영문 대소문자, 숫자 조합"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </SignUpStyle.Row>
            <SignUpStyle.Row>
              <SignUpStyle.Label>비밀번호 확인</SignUpStyle.Label>
              <SignUpStyle.Input
                type="password"
                placeholder="비밀번호 확인"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </SignUpStyle.Row>
            <SignUpStyle.Row>
              <SignUpStyle.Label>사용자 이름　　</SignUpStyle.Label>
              <SignUpStyle.Input
                type="text"
                placeholder="이름"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
            </SignUpStyle.Row>
            <SignUpStyle.Row>
              <SignUpStyle.CheckboxLabel>
                <SignUpStyle.Checkbox
                  type="checkbox"
                  checked={agreeTermsRequired}
                  onChange={() => setAgreeTermsRequired(!agreeTermsRequired)}
                />
                (필수) 이용약관 동의
              </SignUpStyle.CheckboxLabel>
            </SignUpStyle.Row>
            <SignUpStyle.Row>
              <SignUpStyle.CheckboxLabel>
                <SignUpStyle.Checkbox
                  type="checkbox"
                  checked={agreePrivacy}
                  onChange={() => setAgreePrivacy(!agreePrivacy)}
                />
                (필수) 개인정보 수집 및 이용 동의
              </SignUpStyle.CheckboxLabel>
            </SignUpStyle.Row>
            <SignUpStyle.Row>
              <SignUpStyle.Button type="button" onClick={handleSignUp}>
                가입하기
              </SignUpStyle.Button>
            </SignUpStyle.Row>
          </SignUpStyle.Form>
        </>
      )}
    </SignUpStyle.Container>
  );
};

export default SignUp;
