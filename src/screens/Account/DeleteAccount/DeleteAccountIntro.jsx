import React from "react";

import { Intro, Text } from "./styles";

const DeleteAccountIntro = (introProps) => {
  const { user } = introProps;

  return (
    <Intro>
      <Text>
        {user} 님 안녕하세요.
        <br />
        계정을 삭제하신다니 아쉽습니다.
        <br />
        그동안 저희 Y Planner와 함께해주셔서 감사합니다.
      </Text>
    </Intro>
  );
};

export default DeleteAccountIntro;
