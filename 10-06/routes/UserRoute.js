const express = require("express");
const router = express();
const userController = require("../controller/UserController");
const tokenMiddleware = require("../middleware/isTokenValid")

router.post("/signup", userController.signUp);

router.post("/login", userController.login);

router.get("/user/:id", userController.getUserById);

router.put("/update/:id", userController.findUserByFirstNameAndLastName);

router.get("/token", tokenMiddleware.isTokenValid, userController.isValid);

module.exports = router;

// UPDATE user SET firstName = "Shantanu abc" WHERE email LIKE shantanu@email.com
