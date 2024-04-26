// PlantMain.tsx

import React, { useState, useEffect } from "react";
import * as Styles from "../../pages/MyPage/MyPagePlant";
import BadgeGrid from "./BadgeGrid";
import BadgeModal from "./BadgeModal";

export interface Badge {
  name: string;
  image: string;
  locked: boolean;
  content: string;
}

export const badges: Badge[] = [
  {
    name: "소중한 꽃 피우기",
    image: "/badge1.png",
    locked: false,
    content: "처음으로 씨앗을 통해 동화를 만들었을 때 얻을 수 있어요 :)"
  },
  {
    name: "알콩이와 친해지기",
    image: "/badge2.png",
    locked: false,
    content: "처음으로 씨앗을 통해 동화를 만들었을 때 얻을 수 있어요 :)"
  },
  {
    name: "달콩이와 친해지기",
    image: "/badge3.png",
    locked: false,
    content: "처음으로 씨앗을 통해 동화를 만들었을 때 얻을 수 있어요 :)"
  },
  {
    name: "당신은 출석왕",
    image: "/badge4.png",
    locked: true,
    content: "처음으로 씨앗을 통해 동화를 만들었을 때 얻을 수 있어요 :)"
  },
  {
    name: "당신은 독서왕",
    image: "/badge5.png",
    locked: false,
    content: "처음으로 씨앗을 통해 동화를 만들었을 때 얻을 수 있어요 :)"
  },
  {
    name: "당신은 인싸",
    image: "/badge6.png",
    locked: false,
    content: "처음으로 씨앗을 통해 동화를 만들었을 때 얻을 수 있어요 :)"
  },
  {
    name: "나를 표현하기",
    image: "/badge7.png",
    locked: false,
    content: "처음으로 씨앗을 통해 동화를 만들었을 때 얻을 수 있어요 :)"
  },
  {
    name: "당신은 훌륭한 작가",
    image: "/badge8.png",
    locked: false,
    content: "처음으로 씨앗을 통해 동화를 만들었을 때 얻을 수 있어요 :)"
  }
];

const PlantMain: React.FC = () => {
  const [selectedBadge, setSelectedBadge] = useState<string | null>(null);
  const [selectedBadgeImage, setSelectedBadgeImage] = useState<string>("");
  const [selectedBadgeContent, setSelectedBadgeContent] = useState<string>("");
  const [representativePlant, setRepresentativePlant] = useState<{
    name: string;
    image: string;
  } | null>(() => {
    const storedPlant = localStorage.getItem("representativePlant");
    return storedPlant ? JSON.parse(storedPlant) : null;
  });

  useEffect(() => {
    if (representativePlant) {
      localStorage.setItem(
        "representativePlant",
        JSON.stringify(representativePlant)
      );
    } else {
      localStorage.removeItem("representativePlant");
    }
  }, [representativePlant]);

  const handleBadgeClick = (name: string, content: string, image: string) => {
    setSelectedBadge(name);
    setSelectedBadgeContent(content);
    setSelectedBadgeImage(image);
  };

  const handleCloseModal = () => {
    setSelectedBadge(null);
    setSelectedBadgeImage("");
    setSelectedBadgeContent("");
  };

  const handleSetRepresentativePlant = (name: string, image: string) => {
    setRepresentativePlant({ name, image });
  };

  return (
    <Styles.MyPagePlantContainer>
      <Styles.Title>나의 식물</Styles.Title>
      <div style={{ minHeight: "300px" }}>
        {representativePlant && (
          <>
            <img
              src={representativePlant.image}
              alt={representativePlant.name}
            />
            <p>{representativePlant.name}</p>
          </>
        )}
      </div>
      <Styles.Separator />
      <BadgeGrid badges={badges} onBadgeClick={handleBadgeClick} />
      {selectedBadge && (
        <BadgeModal
          badgeName={selectedBadge}
          badgeImage={selectedBadgeImage}
          badgeContent={selectedBadgeContent}
          onClose={handleCloseModal}
          onSetRepresentativePlant={handleSetRepresentativePlant}
          locked={
            badges.find((badge) => badge.name === selectedBadge)?.locked ||
            false
          }
        />
      )}
    </Styles.MyPagePlantContainer>
  );
};

export default PlantMain;
