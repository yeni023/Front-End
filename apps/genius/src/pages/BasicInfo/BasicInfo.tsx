// UserForm.tsx
import React, { useState } from "react";
import * as Styles from "./BasicInfoStyle";
import { useNavigate } from "react-router-dom";

interface FormData {
  name: string;
  gender: string;
  age: number;
  personality: string;
  story: string;
}

interface UserFormProps {
  onSubmit: (data: FormData) => void;
}

const BasicInfo: React.FC<UserFormProps> = ({ onSubmit }) => {
  const navigate = useNavigate();
  const handleBackBtnClick = () => {
    navigate(`/`);
  };
  const handleNextBtnClick = () => {
    navigate(`/ChatDC`);
  };

  const [formData, setFormData] = useState<FormData>({
    name: "",
    gender: "",
    age: 1,
    personality: "",
    story: ""
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    if (name === "age") {
      // Ensure age is a valid number
      const parsedValue = parseInt(value, 10);
      if (!isNaN(parsedValue)) {
        setFormData({ ...formData, [name]: parsedValue });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleGenderChange = (gender: string) => {
    setFormData({ ...formData, gender });
  };

  const handleAgeIncrement = () => {
    setFormData((prevData) => ({ ...prevData, age: prevData.age + 1 }));
  };

  const handleAgeDecrement = () => {
    if (formData.age > 1) {
      setFormData((prevData) => ({ ...prevData, age: prevData.age - 1 }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Styles.Container>
      <Styles.Title>주인공에 대해 알려줘!</Styles.Title>
      <Styles.BtnContainer>
        <Styles.OkBtn onClick={handleBackBtnClick}>이전 단계로</Styles.OkBtn>
        <Styles.NoBtn onClick={handleNextBtnClick}>다음 단계로</Styles.NoBtn>
      </Styles.BtnContainer>
      <Styles.FormContainer onSubmit={handleSubmit}>
        <Styles.Label>
          <Styles.Number>주인공의 이름</Styles.Number>
          <Styles.Img />
          <Styles.Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="예시) 김미미"
          />
        </Styles.Label>
        <Styles.Label>
          <Styles.Number>주인공의 성별</Styles.Number>
          <Styles.Img />
          <Styles.Select
            value={formData.gender || ""}
            onChange={(e) => handleGenderChange(e.target.value)}
          >
            <Styles.Option value="" disabled hidden>
              성별을 선택하세요
            </Styles.Option>
            <option value="Male">남자</option>
            <option value="Female">여자</option>
            <option value="Other">설정안함</option>
          </Styles.Select>
        </Styles.Label>

        <Styles.Label>
          <Styles.Number>주인공의 나이</Styles.Number>
          <Styles.Img />
          <Styles.AgeContainer>
            <Styles.Button
              type="button"
              onClick={handleAgeDecrement}
              disabled={formData.age <= 1}
            >
              -
            </Styles.Button>
            <Styles.AgeInput
              type="number" // Change input type to number
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
            <Styles.Button type="button" onClick={handleAgeIncrement}>
              +
            </Styles.Button>
          </Styles.AgeContainer>
        </Styles.Label>
        <Styles.Label>
          <Styles.Number>주인공의 성격</Styles.Number>
          <Styles.Img />
          <Styles.Input
            type="text"
            name="personality"
            value={formData.personality}
            onChange={handleChange}
            placeholder="예시) 용감하고 당돌한"
          />
        </Styles.Label>
        <Styles.Label>
          <Styles.Number>넣고 싶은 이야기</Styles.Number>
          <Styles.Img />
          <Styles.TextArea
            name="story"
            value={formData.story}
            onChange={handleChange}
            placeholder="예시) 김미미가 용을 물리치는 이야기"
          />
        </Styles.Label>
      </Styles.FormContainer>
    </Styles.Container>
  );
};

export default BasicInfo;
