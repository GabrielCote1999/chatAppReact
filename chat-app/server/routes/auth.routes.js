const { verifySignUp } = require("../middlewares");
const   controller  = require("../controller/auth.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post(
    "/api/auth/signup",
    [verifySignUp.checkDuplicateUsernameOrEmail],
    function() {
      
      controller.signup;
      console.log("user signed up", req.body)
    }
  );
  app.post("/api/auth/signin", function(req, res) {
    controller.signin;
  });
};
