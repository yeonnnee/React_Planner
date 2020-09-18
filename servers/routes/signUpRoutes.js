const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const signUpCon = require("../controllers/signUpCon");
const User = require("../models/user");

router.post(
  "/signUp",
  [
    body("user.userID")
      .trim()
      .isLength({ min: 6 })
      .withMessage("아이디는 6글자 이상의 영문과 숫자로 구성되어야 합니다")
      .bail()
      .custom(async (value) => {
        const findUser = await User.findOne({ where: { userID: value } });
        if (findUser) {
          throw new Error("이미 존재하는 아이디입니다");
        }
        return true;
      })
      .bail()
      .custom((value) => {
        const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
        const result = korean.test(value);
        if (result) {
          throw new Error("아이디는 영문과 숫자로만 구성되어야 합니다");
        }
        return true;
      }),
    body("user.password")
      .trim()
      .isLength({ min: 8 })
      .withMessage("비밀번호는 8~20자로 구성되어야 합니다.")
      .bail()
      .custom((value) => {
        const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        const result = regex.test(value);
        if (!result) {
          throw new Error(
            "비밀번호는 영문 대소문자, 숫자, 특수문자(#?!@$%^&*-)를 포함한 8~20자로 입력해주십시오."
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
            "비밀번호는 영문 대소문자, 숫자, 특수문자(#?!@$%^&*-)를 포함한 8~20자로 입력해주십시오."
          );
        }
        return true;
      }),
    body("user.confirmPassword")
      .trim()
      .custom((value, { req }) => {
        if (value !== req.body.user.password) {
          throw new Error("비밀번호가 일치하지 않습니다");
        }
        return true;
      }),
    body("user.name")
      .trim()
      .isLength({ max: 6 })
      .withMessage("글자 수가 초과하였습니다.")
      .bail()
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
        const regex = /[ㄱ-ㅎ|ㅏ-ㅣ|힣|헿|킼|쿅|쿅|홓|횧|홯|탛|챃|훃|킹|큥|쿙|]/;
        const result = regex.test(value);
        if (result) {
          throw new Error("유효하지 않은 글자가 포함되어 있습니다.");
        }
        return true;
      }),
    body("user.email")
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
  ],
  signUpCon.postSignUp
);

module.exports = router;