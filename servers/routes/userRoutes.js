const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const signUpCon = require("../controllers/signUpCon");
router.get("/signUp", signUpCon.getData);
router.post(
  "/signUp",
  [
    body("user.id")
      .trim()
      .isLength({ min: 6 })
      .withMessage("아이디는 6글자 이상 입력해주십시오")
      .isAlpha()
      .withMessage("아이디는 영문과 숫자로만 구성되어야 합니다"),
    body("user.password")
      .trim()
      .isLength({ min: 10 })
      .withMessage("비밀번호는 10~20자로 구성되어야 합니다.")
      .isAlpha()
      .withMessage(
        "비밀번호는 영문 대소문자와 특수문자, 숫자 조합이여야 합니다."
      ),
    body("user.confirmPassword")
      .trim()
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error("비밀번호가 일치하지 않습니다");
        }
        return true;
      }),
  ],
  signUpCon.postSignUp
);

module.exports = router;
