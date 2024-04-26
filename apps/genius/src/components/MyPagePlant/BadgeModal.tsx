// BadgeModal.tsx

import React, { useState } from "react";
import styled from "styled-components";

interface BadgeModalProps {
  badgeName: string;
  badgeImage: string;
  badgeContent: string;
  onClose: () => void;
  onSetRepresentativePlant: (badgeName: string, badgeImage: string) => void;
  locked: boolean; // 뱃지 잠금 여부를 받아오는 prop 추가
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  width: 697px;
  height: 497px;
  background: #8dd1bd;
  border-radius: 20px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
`;

const BadgeImage = styled.div<{ bgImage: string }>`
  background-image: url(${(props) => props.bgImage});
  width: 200px;
  height: 200px;
  border-radius: 100px;
`;

const BadgeTitle = styled.div<{ bgImage: string }>`
  margin-top: 5px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 39px;
  text-align: center;
  color: #3f5650;
`;
const BadgeContent = styled.div`
  margin-top: 5px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 100;
  font-size: 22px;
  line-height: 39px;
  text-align: center;
  color: #3f5650;
`;
const DisabledButton = styled.button`
  background-color: #ccc; /* 비활성화된 상태의 배경색 */
  color: #888; /* 비활성화된 상태의 텍스트색 */
  cursor: not-allowed; /* 비활성화된 상태의 커서 모양 */
  border: none; /* 테두리 제거 */
  padding: 10px 20px; /* 패딩 설정 */
  border-radius: 5px; /* 버튼 모서리 둥글게 */
`;

const BadgeModal: React.FC<BadgeModalProps> = ({
  badgeName,
  badgeImage,
  badgeContent,
  onClose,
  onSetRepresentativePlant,
  locked // 뱃지 잠금 여부 prop 추가
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleOverlayClick = () => {
    setIsOpen(false);
    onClose();
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleSetRepresentativePlant = () => {
    onSetRepresentativePlant(badgeName, badgeImage);
    setIsOpen(false);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <ModalOverlay onClick={handleOverlayClick}>
          <ModalContent onClick={handleModalClick}>
            <BadgeImage bgImage={badgeImage} />
            <BadgeTitle>{badgeName}</BadgeTitle>
            <BadgeContent>{badgeContent}</BadgeContent>
            {/* 뱃지가 잠겨있는지 확인하여 버튼을 비활성화합니다. */}
            {locked ? (
              <DisabledButton disabled>
                나의 대표 식물로 설정하기
              </DisabledButton>
            ) : (
              <button onClick={handleSetRepresentativePlant}>
                나의 대표 식물로 설정하기
              </button>
            )}
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default BadgeModal;
