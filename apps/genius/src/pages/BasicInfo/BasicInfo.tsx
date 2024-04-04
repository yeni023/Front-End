// UserForm.tsx
import React, { useState } from "react";
import * as Styles from "./BasicInfoStyle";

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
    setFormData({ ...formData, [name]: value });
  };

  const handleGenderChange = (gender: string) => {
    setFormData({ ...formData, gender });
  };

  const handleAgeIncrement = () => {
    setFormData({ ...formData, age: formData.age + 1 });
  };

  const handleAgeDecrement = () => {
    if (formData.age > 0) {
      setFormData({ ...formData, age: formData.age - 1 });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Styles.Container>
      <Styles.LeftContainer>
        <Styles.Char />
        <Styles.malpungseon>
          이야기에 들어갈 주인공에 대해 알려줘!
        </Styles.malpungseon>
      </Styles.LeftContainer>
      <Styles.RightContainer>
        <Styles.FormContainer onSubmit={handleSubmit}>
          <Styles.Label>
            <Styles.Number>1. 주인공의 이름</Styles.Number>
            <Styles.Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Styles.Label>
          <Styles.Label>
            <Styles.Number>2. 주인공의 성별</Styles.Number>
            <Styles.GenderButtonGroup>
              <Styles.GenderButton
                selected={formData.gender === "Male"}
                onClick={() => handleGenderChange("Male")}
              >
                남자
              </Styles.GenderButton>
              <Styles.GenderButton
                selected={formData.gender === "Female"}
                onClick={() => handleGenderChange("Female")}
              >
                여자
              </Styles.GenderButton>
              <Styles.GenderButton
                selected={formData.gender === "Other"}
                onClick={() => handleGenderChange("Other")}
              >
                설정안함
              </Styles.GenderButton>
            </Styles.GenderButtonGroup>
          </Styles.Label>
          <Styles.Label>
            <Styles.Number>3. 주인공의 나이</Styles.Number>
            <Styles.AgeContainer>
              <Styles.Button
                type="button"
                onClick={handleAgeDecrement}
                disabled={formData.age <= 1}
              >
                -
              </Styles.Button>
              <Styles.AgeInput
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
            <Styles.Number>4. 주인공의 성격</Styles.Number>
            <Styles.Input
              type="text"
              name="personality"
              value={formData.personality}
              onChange={handleChange}
            />
          </Styles.Label>
          <Styles.Label>
            <Styles.Number>5. 꼭 넣고 싶은 이야기</Styles.Number>
            <Styles.TextArea
              name="story"
              value={formData.story}
              onChange={handleChange}
            />
          </Styles.Label>
          <Styles.EllipseButton />
        </Styles.FormContainer>
      </Styles.RightContainer>
    </Styles.Container>
  );
};

export default BasicInfo;
