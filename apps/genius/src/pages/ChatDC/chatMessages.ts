// chatMessages.ts
export const initialMessages = [
  {
    text: "안녕! 나는 예은이의 동화 만들기를 도와줄 달콩이야.",
    isUser: false
  },
  {
    text: "앞으로 내가 이야기를 짧게 만들면 예은이가 뒤에 이어질 이야기를 자유롭게 보내주면 돼!",
    isUser: false
  },
  {
    text: "동화 만들 준비가 되었니?",
    isUser: false
  }
];

export const notReadyMessage = {
  text: "그럼 동화 만들 준비가 되었을 때 나를 다시 불러줘!",
  isUser: false
};

export const startStoryMessage = {
  text: "그럼 내가 먼저 동화를 만들어볼게",
  isUser: false
};
export const story1Message = {
  text: "~~~~~~~~~~~~",
  isUser: false
};

export const story2Message = {
  text: "~~~~~, 뒤에 이어질 이야기를 작성해줘!",
  isUser: false
};
