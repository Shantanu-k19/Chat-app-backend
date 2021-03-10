const { createUser, login, getUsers } = require("./user.controller");
const { validate, checkToken } = require("../../auth/token_validation");
const router = require("express").Router();
router.post("/adduser", createUser);
router.get("/getall", checkToken, getUsers);

router.post("/login", login);

module.exports = router;