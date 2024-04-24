// PlantMain.tsx

import React, { useState } from "react";
import * as Styles from "./MyPagePlant";

import BadgeGrid from "../../components/MyPage/BadgeGrid";
import BadgeModal from "../../components/MyPage/BadgeModal";

const PlantMain: React.FC = () => {
  const [selectedBadge, setSelectedBadge] = useState<string | null>(null);

  const handleBadgeClick = (name: string) => {
    setSelectedBadge(name); // 뱃지 클릭 시 선택된 뱃지 이름을 상태에 설정
  };

  const handleCloseModal = () => {
    setSelectedBadge(null); // 모달이 닫힐 때 상태를 초기화
  };

  const badges = [
    { name: "칭찬한걸음", image: "/badge1.png", locked: false },
    { name: "칭찬한걸음", image: "/badge1.png", locked: false },
    { name: "칭찬한걸음", image: "/badge1.png", locked: false },
    { name: "칭찬한걸음", image: "/badge1.png", locked: true },
    { name: "칭찬한걸음", image: "/badge1.png", locked: false },
    { name: "칭찬한걸음", image: "/badge1.png", locked: false },
    { name: "칭찬한걸음", image: "/badge1.png", locked: false },
    { name: "칭찬한걸음", image: "/badge1.png", locked: false }
    // Add more badges here...
  ];

  return (
    <Styles.MyPagePlantContainer>
      <Styles.Title>나의 식물</Styles.Title>
      <Styles.Separator />
      <BadgeGrid badges={badges} onBadgeClick={handleBadgeClick} />
      {selectedBadge && (
        <BadgeModal badgeName={selectedBadge} onClose={handleCloseModal} />
      )}
    </Styles.MyPagePlantContainer>
  );
};

export default PlantMain;
