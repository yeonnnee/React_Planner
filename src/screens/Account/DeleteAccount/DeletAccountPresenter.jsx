import React from "react";

import Loader from "../../../components/Loader";
import Header from "../../../components/Header";
import Modal from "../../../components/Modal";
import { Container, Frame, Main } from "../../../components/styles/Templates";
import DeleteAccountIntro from "./DeleteAccountIntro";
import DeleteAccountReason from "./DeleteAccountReason";
import DeleteAccountInput from "./DeleteAccountInput";
import DeleteAccountNotice from "./DeleteAccountNotice";
import { Wrapper, Title, Section, Form, Button } from "./styles";

const DeleteAccountPresenter = (deleteAccountProps) => {
  const {
    isLoading,
    user,
    onChange,
    onSelect,
    passwordError,
    optionError,
    checkBoxError,
    changeCheckBoxStatus,
    checkError,
    modalStatus,
    deleteAccount,
    cancel,
  } = deleteAccountProps;

  return (
    <Container>
      <Frame>
        <Main>
          <Header />
          <Wrapper>
            <Title>계정삭제</Title>
            <DeleteAccountIntro user={user} />
            <Section>
              <DeleteAccountReason
                onSelect={onSelect}
                optionError={optionError}
              />
            </Section>
            <Form>
              <DeleteAccountInput
                onChange={onChange}
                passwordError={passwordError}
              />
            </Form>
            <DeleteAccountNotice
              changeCheckBoxStatus={changeCheckBoxStatus}
              checkBoxError={checkBoxError}
            />
            <Button onClick={checkError}>내 계정 영구 삭제</Button>
            {modalStatus === "display" ? (
              <Modal
                message="정말 계정을 삭제하시겠습니까?"
                confirm={deleteAccount}
                cancel={cancel}
              />
            ) : null}
            {isLoading ? <Loader /> : null}
          </Wrapper>
        </Main>
      </Frame>
    </Container>
  );
};
export default DeleteAccountPresenter;
