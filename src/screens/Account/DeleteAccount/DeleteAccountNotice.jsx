import React from "react";

import { Notice, CheckForm, CheckBox, Error } from "./styles";

const DeleteAccountNotice = (noticeProps) => {
  const { changeCheckBoxStatus, checkBoxError } = noticeProps;

  return (
    <Notice>
      아래 버튼을 누르면 사용자에 대한 모든 데이터가 영구적으로 삭제되어 복구할
      수 없게 됩니다. <br />
      이후 계정을 만들 때 같은 이메일 주소로 다시 가입할 수 없습니다.
      <CheckForm>
        <CheckBox type="checkbox" onClick={changeCheckBoxStatus} />
        위의 내용을 확인하였습니다.
        {checkBoxError ? <Error>{checkBoxError}</Error> : null}
      </CheckForm>
    </Notice>
  );
};

export default DeleteAccountNotice;
