import React, { useState } from 'react';
import axios from 'axios';
import * as SignUpStyle from './SignUpStyle';
import Navbar from '../Navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp: React.FC = () => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTermsRequired, setAgreeTermsRequired] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [isSignUpComplete, setIsSignUpComplete] = useState(false);
  const [signUpFailed, setSignUpFailed] = useState(false);

  // 비밀번호 유효성 검사 함수
  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return passwordRegex.test(password);
  };

  // 이메일 중복 검사 함수
  const checkEmailExists = async (email: string) => {
    try {
      const response = await axios.get(`http://localhost:8000/genius/members/check-email/?email=${email}`);
      return response.data.exists; // 서버가 존재 여부를 반환한다고 가정
    } catch (error) {
      console.error('이메일 중복 검사 중 오류 발생:', error);
      return false; // 오류가 발생한 경우 기본값으로 false를 반환
    }
  };

  const handleSignUp = async () => {
    if (!nickname || !email || !password || !confirmPassword) {
      toast.error('기본 가입 정보를 모두 입력해주세요.');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('비밀번호가 일치하지 않습니다.');
      return;
    }

    if (!validatePassword(password)) {
      toast.error('비밀번호는 최소 6자 이상이어야 하며, 숫자와 영문자를 포함해야 합니다.');
      return;
    }

    if (!agreeTermsRequired || !agreePrivacy) {
      toast.error('모든 약관에 동의해야 합니다.');
      return;
    }

    const emailExists = await checkEmailExists(email);
    if (emailExists) {
      toast.error('이메일이 이미 사용 중입니다.');
      return;
    }

    const formData = {
      nickname,
      email,
      password,
      confirm_password: confirmPassword,
      agree_terms_required: agreeTermsRequired,
      agree_privacy: agreePrivacy,
    };

    try {
      const response = await axios.post('http://localhost:8000/genius/members/', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // 회원가입 성공 후 사용자 정보를 로컬 스토리지에 저장하고 로그인 상태로 설정
      const user = {
        email,
        nickname,
        userId: response.data.id, // 서버에서 반환된 사용자 ID
        profImg: response.data.profImg || 'src/assets/images/default-profile.png', // 기본 프로필 이미지
      };

      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('isLoggedIn', 'true'); // 로그인 상태 저장

      setIsSignUpComplete(true);

      toast.success('회원가입이 완료되었습니다.', {
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
      });

      // 회원가입 완료 후 페이지 이동 지연
      setTimeout(() => {
        window.location.href = '/MainHome'; // 메인 홈으로 이동
      }, 2500);
    } catch (error) {
      setSignUpFailed(true);
      if (axios.isAxiosError(error)) {
        console.error('회원가입에 실패했습니다:', error.response?.data || error.message);
        toast.error(`회원가입에 실패했습니다: ${error.response?.data.message || error.message}`, {
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
        });
      } else {
        console.error('회원가입에 실패했습니다:', error);
        toast.error('회원가입에 실패했습니다. 다시 시도해주세요.', {
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
        });
      }
    }
  };

  return (
    <SignUpStyle.Container>
      <Navbar />
      <ToastContainer />
      <h1>{isSignUpComplete ? '회원가입 완료' : signUpFailed ? '회원가입 실패' : '회원가입'}</h1>
      {isSignUpComplete ? (
        <p>회원가입이 완료되었습니다. 환영합니다!</p>
      ) : signUpFailed ? (
        <p>회원가입에 실패했습니다. 다시 시도해주세요.</p>
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
                placeholder="최소 6자, 숫자 및 영문 포함"
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
