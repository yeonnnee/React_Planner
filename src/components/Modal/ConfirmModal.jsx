import React from "react";

import {
  ModalContainer,
  Modal,
  ConfirmMessage,
  Column,
  Button,
} from "./ConfirmModal.styles";

const DeleteConfirmModal = (modalProps) => {
  const { confirm, cancel, message } = modalProps;

  return (
    <ModalContainer>
      <Modal>
        <ConfirmMessage>{message}</ConfirmMessage>
        <Column>
          <Button onClick={confirm}>확인</Button>
          <Button onClick={cancel}>취소</Button>
        </Column>
      </Modal>
    </ModalContainer>
  );
};

export default DeleteConfirmModal;
