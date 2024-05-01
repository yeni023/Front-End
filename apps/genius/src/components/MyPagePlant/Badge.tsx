// Badge.tsx

import React from "react";
import styled from "styled-components";

interface BadgeProps {
  name: string;
  image: string;
  locked: boolean;
  onClick: () => void;
}

const BadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

const BadgeImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
`;

export const BadgeName = styled.span`
  margin-top: 5px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 39px;
  text-align: center;

  color: #3f5650;
`;

const LockIcon = styled.span`
  font-size: 70px;
  position: absolute;
  top: 50px;
`;

const Badge: React.FC<BadgeProps> = ({ name, image, locked, onClick }) => {
  return (
    <BadgeContainer onClick={onClick}>
      <BadgeImage src={image} alt={name} />
      {locked && <LockIcon>🔒</LockIcon>}
      <BadgeName>{name}</BadgeName>
    </BadgeContainer>
  );
};

export default Badge;
