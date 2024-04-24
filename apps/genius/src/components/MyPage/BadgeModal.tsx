// BadgeModal.tsx

import React, { useState } from "react";
import styled from "styled-components";

interface BadgeModalProps {
  badgeName: string;
  onClose: () => void;
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
  position: absolute;
  width: 697px;
  height: 397px;
  background: #8dd1bd;
  border-radius: 20px;
  padding: 20px; // 내용에 여백 추가
`;

const BadgeModal: React.FC<BadgeModalProps> = ({ badgeName, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleOverlayClick = () => {
    setIsOpen(false);
    onClose();
  };

  // 모달 내부를 클릭했을 때 이벤트 버블링을 막기 위한 함수
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <>
      {isOpen && (
        <ModalOverlay onClick={handleOverlayClick}>
          <ModalContent onClick={handleModalClick}>
            <h2>{badgeName}</h2>
            <p>뱃지에 대한 설명...</p>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default BadgeModal;
