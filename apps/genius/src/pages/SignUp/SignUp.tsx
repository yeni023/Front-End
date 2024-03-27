// SignUp.tsx

import React, { useState } from 'react';
import * as SignUpStyle from './SignUpStyle';

interface PhoneNumber {
  areaCode: number;
  exchangeCode: number;
  subscriberNumber: number;
}

interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = () => {
  const [id, setID] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState<PhoneNumber>({
    areaCode: 0,
    exchangeCode: 0,
    subscriberNumber: 0,
  });
  const [agreeAll, setAgreeAll] = useState(false);
  const [agreeTermsRequired, setAgreeTermsRequired] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [agreeEvent, setAgreeEvent] = useState(false);
  const [isSignUpComplete, setIsSignUpComplete] = useState(false);

  const handleSignUp = () => {
    if (agreeAll) {
      console.log('회원가입 성공:', {
        id,
        username,
        email,
        password,
        confirmPassword,
        phoneNumber,
        agreeTermsRequired,
        agreePrivacy,
        agreeEvent,
      });
      setIsSignUpComplete(true); // 회원가입 완료 상태 업데이트
    } else {
      console.log('모든 약관에 동의해야 합니다.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, key: keyof PhoneNumber) => {
    const value = e.target.value;

    // 숫자로만 이루어져 있는지 확인
    if (/^\d+$/.test(value)) {
      setPhoneNumber((prev) => ({ ...prev, [key]: Number(value) }));
    }
    // 숫자가 아닌 경우 무시 (다른 문자열은 입력되지 않음)
  };

  const handleAgreeAllChange = () => {
    const allChecked = !agreeAll;
    setAgreeAll(allChecked);
    setAgreeTermsRequired(allChecked);
    setAgreePrivacy(allChecked);
    setAgreeEvent(allChecked);
  };

  return (
    <SignUpStyle.Container>
      <h1>{isSignUpComplete ? '회원가입 완료' : '회원가입'}</h1>
      {isSignUpComplete ? (
        <p>회원가입이 완료되었습니다. 환영합니다!</p>
      ) : (
        <>
          <SignUpStyle.Divider />
          <SignUpStyle.Form>
            <SignUpStyle.Row>
              <SignUpStyle.Label>아이디　　　　</SignUpStyle.Label>
              <SignUpStyle.Input
                type="text"
                placeholder="아이디"
                value={id}
                onChange={(e) => setID(e.target.value)}
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </SignUpStyle.Row>
            <SignUpStyle.Row>
              <SignUpStyle.Label>이메일　　　　</SignUpStyle.Label>
              <SignUpStyle.Input
                type="email"
                placeholder="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </SignUpStyle.Row>
            <SignUpStyle.Row>
              <SignUpStyle.Label>전화번호　　　</SignUpStyle.Label>
              <SignUpStyle.PhoneInputContainer>
                <SignUpStyle.PhoneInputBox>
                  <SignUpStyle.Input
                    type="tel"
                    placeholder=""
                    value={phoneNumber.areaCode.toString()}
                    onChange={(e) => handleInputChange(e, 'areaCode')}
                  />
                </SignUpStyle.PhoneInputBox>
                <SignUpStyle.PhoneInputBox>
                  <SignUpStyle.Hyphen>-</SignUpStyle.Hyphen>
                  <SignUpStyle.Input
                    type="tel"
                    placeholder=""
                    value={phoneNumber.exchangeCode.toString()}
                    onChange={(e) => handleInputChange(e, 'exchangeCode')}
                  />
                </SignUpStyle.PhoneInputBox>
                <SignUpStyle.PhoneInputBox>
                  <SignUpStyle.Hyphen>-</SignUpStyle.Hyphen>
                  <SignUpStyle.Input
                    type="tel"
                    placeholder=""
                    value={phoneNumber.subscriberNumber.toString()}
                    onChange={(e) => handleInputChange(e, 'subscriberNumber')}
                  />
                </SignUpStyle.PhoneInputBox>
              </SignUpStyle.PhoneInputContainer>
            </SignUpStyle.Row>
            <SignUpStyle.Row>
              <SignUpStyle.CheckboxLabel>
                <SignUpStyle.Checkbox
                  type="checkbox"
                  checked={agreeAll}
                  onChange={handleAgreeAllChange}
                />
                전체동의
              </SignUpStyle.CheckboxLabel>
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
              <SignUpStyle.CheckboxLabel>
                <SignUpStyle.Checkbox
                  type="checkbox"
                  checked={agreeEvent}
                  onChange={() => setAgreeEvent(!agreeEvent)}
                />
                (선택) 이벤트 수신 동의
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
