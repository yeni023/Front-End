import * as S from "./styles";
import * as C from "./container";

const StoryFlowView = () => {
  return (
    <S.Container>
      <C.Header />
      <S.Contents>
        <C.Content1 />
        <C.Content2 />
      </S.Contents>
    </S.Container>
  );
};

export default StoryFlowView;
