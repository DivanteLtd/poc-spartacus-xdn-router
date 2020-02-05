const Router = require("xdn-router/Router");
module.exports = () => {
  return new Router()
    .match("/", ({ cache }) => {
      cache({ maxAgeSeconds: 10000 });
    })
    .match("/*path", ({ proxy }) => {
      proxy("express", { path: "/{path}" });
    });
};
