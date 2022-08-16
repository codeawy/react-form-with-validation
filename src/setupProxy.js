const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://refaa.peofreedns.com",
      changeOrigin: true,
    })
  );
};
