export const emailValidation = (val, setError) => {
  if (!val.includes("@")) {
    setError("유효하지 않은 이메일입니다.");
  } else if (val.length > 80) {
    setError("이메일은 80자 이내로 작성해주십시오.");
  } else {
    setError("");
  }
};

export const passwordValidation = (val, setError) => {
  if (val.length < 8) {
    setError("비밀번호는 8~12자로 작성해주십시오.");
  } else if (val.length > 8) {
    setError("");
  }
};

export const confirmPw_validation = (val, pw, setError) => {
  if (val !== pw) {
    setError("비밀번호와 일치하지 않습니다.");
  } else {
    setError("");
  }
};

export const nameValidation = (val, setError) => {
  if (val.length > 20) {
    setError("글자 수를 초과하였습니다.");
  } else {
    setError("");
  }
};

export const validation = (email, pw, confirmPw, name, setError) => {
  if (email === "" || pw === "" || confirmPw === "" || name === "") {
    setError("빈칸 없이 입력해주시기 바랍니다");
  } else {
    setError("");
  }
};
