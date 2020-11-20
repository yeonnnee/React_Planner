const { body } = require("express-validator");

const accountValidation = [
  body("updatedPassword")
    .trim()
    .custom((value) => {
      const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
      const result = regex.test(value);
      if (!result) {
        throw new Error(
          "비밀번호는 영문 대소문자, 숫자, 특수문자(#?!@$%^&*-)를 포함한 8~12자로 입력해주십시오."
        );
      }
      return true;
    })
    .bail()
    .custom((value) => {
      const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
      const result = korean.test(value);
      if (result) {
        throw new Error(
          "비밀번호는 영문 대소문자, 숫자, 특수문자(#?!@$%^&*-)를 포함한 8~12자로 입력해주십시오."
        );
      }
      return true;
    }),
];

module.exports = accountValidation;
