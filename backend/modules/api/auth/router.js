const express = require("express");
const router = express.Router();

const authController = require("./controller");
const authMiddleware = require("../auth/auth");

router.get("/checksession",authMiddleware.authorize, (req, res) => {
  if (req.session.userInfo) {
    res.send(req.session.userInfo);
  }else {
    res.status(error.status).send(error.err);
  }
  console.log(req.session);
})

router.post("/", (req, res) => {
  authController
    .login(req.body)
    .then(userInfo => {
      req.session.userInfo = userInfo;
      res.send(userInfo);
    })
    .catch(error => res.status(error.status).send(error.err));
});

router.delete("/", (req, res) => {
  req.session.destroy();
  res.send("Logged out");
});

module.exports = router;
