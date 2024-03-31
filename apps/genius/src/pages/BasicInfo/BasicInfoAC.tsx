import React, { useState, useRef, useEffect } from "react";
import * as Styles from "./BasicInfoStyle";

interface Message {
  text: string;
  isUser: boolean;
}
// 기본 정보 컴포넌트
const BasicInfoAC: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]); // 채팅 메시지 상태
  const [name, setName] = useState<string>(""); // 이름 상태
  const [gender, setGender] = useState<string>(""); // 성별 상태
  const [age, setAge] = useState<number | null>(null); // 나이 상태
  const [step, setStep] = useState<number>(0); // 단계 상태
  const [storyStarted, setStoryStarted] = useState<boolean>(false); // 이야기 시작 여부 상태
  const messagesEndRef = useRef<HTMLDivElement>(null); // 메시지 스크롤링을 위한 ref

  // 유저 메시지 전송 핸들러
  const handleSendMessage = (message: string) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, isUser: true }
    ]);
  };

  // 봇 메시지 전송 핸들러
  const handleBotMessage = (message: string) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, isUser: false }
    ]);
  };

  // 폼 제출 핸들러
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    switch (step) {
      case 0:
        handleBotMessage(
          "안녕! 나는 너의 동화 만들기를 도와줄 알콩이라고해. 지금부터 내가 물어보는 것에 잘 대답해줘!"
        );
        handleBotMessage("주인공의 이름을 알려줘!");
        setStep(1);
        break;
      case 1:
        handleSendMessage(`주인공의 이름은 ${name}이야`);
        handleBotMessage(
          `주인공의 이름은 ${name}이구나, 이제 주인공의 성별을 알려줘.`
        );
        setStep(2);
        break;
      case 2:
        handleSendMessage(`주인공의 성별은 ${gender}이야`);
        handleBotMessage(
          `주인공의 성별은 ${gender}구나, 이제 주인공의 나이를 알려줘.`
        );
        setStep(3);
        break;
      case 3:
        handleSendMessage(`주인공의 나이는 ${age}살이야`);
        handleBotMessage(
          `주인공의 나이는 ${age}살이구나, 이제 이야기 만들기를 시작해볼까?`
        );
        setStep(4);
        break;
      default:
        break;
    }
  };

  // 메시지 스크롤링 이펙트
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // 이야기 시작 핸들러
  const handleStartStory = (start: boolean) => {
    setStoryStarted(start);
    if (start) {
      handleBotMessage("좋아, 이야기 만들기를 시작할게!");
    } else {
      handleBotMessage("알겠어, 다음에 이야기 만들기를 도와줄게!");
    }
  };

  // 컴포넌트 반환
  return (
    <Styles.ACBackgroundContainer>
      <Styles.MessagesList>
        {messages.map((message, index) => (
          <Styles.MessageContainer
            key={index}
            isUser={message.isUser}
            alignRight={!message.isUser} // 메시지 타입에 따라 alignRight prop 전달
          >
            <p>
              <b>{message.isUser ? "User" : "AI"}</b>: {message.text}
            </p>
          </Styles.MessageContainer>
        ))}
        <div ref={messagesEndRef} />
      </Styles.MessagesList>
      <form onSubmit={handleSubmit}>
        {step === 0 && (
          <Styles.InputContainer>
            <Styles.Button type="submit">시작</Styles.Button>
          </Styles.InputContainer>
        )}
        {step === 1 && (
          <Styles.InputContainer>
            <Styles.Input
              type="text"
              placeholder="알콩이에게 주인공의 이름을 알려줘!"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <Styles.Button type="submit">다음</Styles.Button>
          </Styles.InputContainer>
        )}
        {step === 2 && (
          <Styles.InputContainer>
            <Styles.Input
              type="text"
              placeholder="알콩이에게 주인공의 성별을 알려줘!"
              value={gender}
              onChange={(event) => setGender(event.target.value)}
            />
            <Styles.Button type="submit">다음</Styles.Button>
          </Styles.InputContainer>
        )}
        {step === 3 && (
          <Styles.InputContainer>
            <Styles.Input
              type="number"
              placeholder="알콩이에게 주인공의 나이를 알려줘!"
              value={age || ""}
              onChange={(event) => setAge(parseInt(event.target.value))}
            />
            <Styles.Button type="submit">전송</Styles.Button>
          </Styles.InputContainer>
        )}
        {step === 4 && !storyStarted && (
          <Styles.InputContainer>
            <Styles.Button type="button" onClick={() => handleStartStory(true)}>
              응
            </Styles.Button>
            <Styles.Button
              type="button"
              onClick={() => handleStartStory(false)}
            >
              아니오
            </Styles.Button>
          </Styles.InputContainer>
        )}
      </form>
    </Styles.ACBackgroundContainer>
  );
};

export default BasicInfoAC;
