export const emailValidation = (val, setError) => {
  if (!val.includes("@")) {
    setError({ email: "유효하지 않은 이메일입니다." });
  } else if (val.length > 80) {
    setError({ email: "이메일은 80자 이내로 작성해주십시오." });
  } else {
    setError({ email: "" });
  }
};

export const passwordValidation = (val, setError) => {
  if (val.length < 8) {
    setError({ password: "비밀번호는 8~12자로 작성해주십시오." });
  } else if (val.length > 12) {
    setError({ password: "비밀번호는 8~12자로 작성해주십시오." });
  } else {
    setError({ password: "" });
  }
};

export const confirmPw_validation = (val, pw, setError) => {
  if (val !== pw) {
    setError({ confirmPw: "비밀번호와 일치하지 않습니다." });
  } else {
    setError({ confirmPw: "" });
  }
};

export const nameValidation = (val, setError) => {
  if (val.length > 20) {
    setError({ name: "글자 수를 초과하였습니다." });
  } else {
    setError({ name: "" });
  }
};
