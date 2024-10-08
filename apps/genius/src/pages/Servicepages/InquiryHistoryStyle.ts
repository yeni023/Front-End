// InquiryHistoryStyle.ts
import styled from "styled-components";

export const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  background-color: aliceblue;
  margin: 0 auto;
  padding: 50px;
  display: flex;
  flex-direction: column;

  align-items: left;

  h2 {
    margin-top: 5%;
  }
`;

export const InquiryList = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export const InquiryItem = styled.div`
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 30px;

p {
  line-height: 2.0;
}
`;

