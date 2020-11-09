// React 에서 server로 api 요청 시 cors 관련 오류 방지
const { createProxyMiddleware } = require("http-proxy-middleware");

// /api로 시작되는 api는 target으로 설정된 서버 url로 호출
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://suspicious-hypatia-73498e.netlify.app/",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
        "/monthly/api": "",
        "/monthly/edit/api": "",
        "/challenge/api": "",
        "/account/api": "",
      },
    })
  );
};
