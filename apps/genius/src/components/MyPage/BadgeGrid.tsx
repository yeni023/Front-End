// BadgeGrid.tsx

import React from "react";
import styled from "styled-components";
import Badge from "./Badge";

interface BadgeGridProps {
  badges: {
    name: string;
    image: string;
    locked: boolean;
  }[];
  onBadgeClick: (name: string) => void;
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const BadgeGrid: React.FC<BadgeGridProps> = ({ badges, onBadgeClick }) => {
  const handleBadgeClick = (name: string) => {
    onBadgeClick(name); // 뱃지를 클릭했을 때의 이벤트 핸들러 호출
  };

  return (
    <GridContainer>
      {badges.map((badge, index) => (
        <Badge
          key={index}
          name={badge.name}
          image={badge.image}
          locked={badge.locked}
          onClick={() => handleBadgeClick(badge.name)} // 뱃지 클릭 핸들러
        />
      ))}
    </GridContainer>
  );
};

export default BadgeGrid;
