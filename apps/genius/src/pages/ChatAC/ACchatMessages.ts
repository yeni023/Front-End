// chatMessages.ts
export const initialMessages = [
  {
    text: "안녕! 나는 예은이의 동화 만들기를 도와줄 알콩이야.",
    isUser: false
  },
  {
    text: "앞으로 내가 질문을 하면 예은이가 선택지 1개를 골라주면 돼!",
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
  text: "그럼 동화 만들기를 시작할게!",
  isUser: false
};
export const questions: { text: string; choices: string[] }[] = [
  {
    text: "주인공의 이름이 뭐야?",
    choices: ["루나", "아일리스", "피오나"]
  },
  {
    text: "주인공의 성격이 어때?",
    choices: ["당돌함", "수줍음이 많음", "쾌활한"]
  },
  {
    text: "주인공은 어디로 갔을까?",
    choices: ["달", "지구", "별"]
  },
  {
    text: "악당을 만났어. 악당은 어떤 악당일까?",
    choices: ["무지개 빔을 쏘는 악당", "거대한 디저트 괴물", "로봇 괴물"]
  },
  {
    text: "악당을 뭘로 물리칠까?",
    choices: ["총", "광선검", "지팡이"]
  }
  // 여기에 추가적인 질문들을 넣어주세요
];
