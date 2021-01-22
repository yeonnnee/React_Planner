import React from "react";

import {
  ModalContainer,
  Modal,
  ConfirmMessage,
  Column,
  Button,
} from "./DeleteConfirmModal.styles";

const DeleteConfirmModal = (modalProps) => {
  const { conFirmDelete, cancelDelete } = modalProps;

  return (
    <ModalContainer>
      <Modal>
        <ConfirmMessage>정말 삭제하시겠습니까?</ConfirmMessage>
        <Column>
          <Button onClick={conFirmDelete}>확인</Button>
          <Button onClick={cancelDelete}>취소</Button>
        </Column>
      </Modal>
    </ModalContainer>
  );
};

export default DeleteConfirmModal;
