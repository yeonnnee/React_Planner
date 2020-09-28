const { body } = require("express-validator");

const User = require("../../models/user");

const signUpValidation = [
  body("email")
    .trim()
    .custom((value) => {
      const regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[hanmail|naver|gmail]*.[com|net]{2,3}$/i;
      const result = regex.test(value);
      if (!result) {
        throw new Error("유효하지 않은 이메일입니다");
      }
      return true;
    })
    .bail()
    .custom(async (value) => {
      const findUser = await User.findOne({ where: { email: value } });
      if (findUser) {
        throw new Error("이미 사용중인 이메일입니다");
      }
      return true;
    }),

  body("password")
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

  body("name")
    .trim()
    .custom((value) => {
      const regex = /[#?!@$%^&*-]/;
      const result = regex.test(value);
      if (result) {
        throw new Error("한글로 입력해주십시오.");
      }
      return true;
    })
    .bail()
    .custom((value) => {
      const regex = /[0-9|a-z|A-Z]/;
      const result = regex.test(value);
      if (result) {
        throw new Error("한글로 입력해주십시오.");
      }
      return true;
    })
    .bail()
    .custom((value) => {
      const regex = /[ㄱ-ㅎ|ㅏ-ㅣ|핳|힣|캌|킼|핰|힠|캏|킿|쿟|쿅|쿜|훃|홓|홐|훜|쿸|큨|흏]/;
      const result = regex.test(value);
      if (result) {
        throw new Error("유효하지 않은 글자가 포함되어 있습니다.");
      }
      return true;
    }),
];

module.exports = signUpValidation;
