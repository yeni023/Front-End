import * as S from "./styles";
import RightAngleBracket from "../assets/StoryFlow/RightAngleBracket.svg";

type HeaderElementsType = {
  text1: string;
  text2: string;
  size: number;
  color: string;
  action: () => void;
};

const HeaderElementsData: HeaderElementsType[] = [
  {
    text1: "STEP 1",
    text2: "장르 선택",
    size: 24,
    color: "#9D9D9D",
    action: () => { }
  },
  {
    text1: "STEP 2",
    text2: "주제 선택",
    size: 24,
    color: "#9D9D9D",
    action: () => { }
  },
  {
    text1: "STEP 3",
    text2: "기본 정보",
    size: 24,
    color: "#9D9D9D",
    action: () => { }
  },
  {
    text1: "STEP 4",
    text2: "도입부 컨펌",
    size: 24,
    color: "#9D9D9D",
    action: () => { }
  }
];

const HeaderElementText = ({
  text1,
  text2,
  size,
  color
}: {
  text1: string;
  text2: string;
  size: number;
  color: string;
}) => {
  return (
    <S.HeaderElement>
      <p style={{ fontSize: size, color: color }}>{text1}</p>
      <p style={{ fontSize: size, color: color }}>{text2}</p>
    </S.HeaderElement>
  );
};

export const Header = () => {
  return (
    <S.Header>
      <h1 style={{ paddingLeft: "50px" }}>Logo</h1>
      {HeaderElementsData.map((data, index) => (
        <>
          {index ? (
            <img src={RightAngleBracket} alt="RightAngleBracket" />
          ) : null}
          <HeaderElementText
            key={index}
            text1={data.text1}
            text2={data.text2}
            size={data.size}
            color={data.color}
          />
        </>
      ))}
    </S.Header>
  );
};
