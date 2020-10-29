export const emailValidation = (val, setValidationError) => {
  if (!val.includes("@")) {
    setValidationError({ email: "유효하지 않은 이메일입니다." });
  } else if (val.length > 80) {
    setValidationError({ email: "이메일은 80자 이내로 작성해주십시오." });
  } else {
    setValidationError({ email: "" });
  }
};

export const passwordValidation = (val, setValidationError) => {
  if (val.length < 8) {
    setValidationError({ password: "비밀번호는 8~16자로 작성해주십시오." });
  } else if (val.length > 16) {
    setValidationError({ password: "비밀번호는 8~16자로 작성해주십시오." });
  } else {
    setValidationError({ password: "" });
  }
};

export const confirmPw_validation = (val, pw, setValidationError) => {
  if (val !== pw) {
    setValidationError({ confirmPw: "비밀번호와 일치하지 않습니다." });
  } else {
    setValidationError({ confirmPw: "" });
  }
};

export const nameValidation = (val, setValidationError) => {
  if (val.length > 20) {
    setValidationError({ name: "글자 수를 초과하였습니다." });
  } else {
    setValidationError({ name: "" });
  }
};
