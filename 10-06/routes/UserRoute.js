const express = require("express");
const User = require("../models/User");
const router = express();
const mongoose = require("mongoose");

router.post("/signup", (req, res) => {
  let { firstName, lastName, email, password } = req.body;
  let user = new User({
    firstName,
    lastName,
    email,
    password,
  });
  user
    .save()
    .then(() => res.status(200).send(user))
    .catch((error) => {
      console.error(error);
      return res.status(500).send("ERROR");
    });
});

router.post("/login", (req, res) => {
  let { email, password } = req.body;
  User.findOne({ email: email })
    .then((user) => {
      console.info(`User with email: ${email} was successfully found`);
      if (password === user.password) {
        console.info("Login successful");
        return res.status(200).send(user);
      }
      console.warn("Password incorrect");
      return res.status(401).send("Password was incorrect");
    })
    .catch((error) => {
      console.error(`User with email: ${email} does not exist!`);
      return res.status(404).send(`User with email: ${email} doesn't exist!`);
    });
});

router.get("/user/:id", (req, res) => {
  let id = req.params.id;
  id = mongoose.Types.ObjectId(id);
  User.findOne({ _id: id })
    .then((user) => {
      if (user) {
        console.info("User found");
        return res.status(200).send(user);
      }
      console.error("User was not found!");
      return res.status(404).send("NOT FOUND");
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).send("ERROR");
    });
});

router.put("/update/:id", (req, res) => {
  let { email, password, firstName, lastName } = req.body;
  let id = req.params.id;
  id = mongoose.Types.ObjectId(id);
  User.updateOne(
    { _id: id },
    { $set: { email, password, firstName, lastName } }
  )
    .then(() => {
      console.info("Update successful");
      return res.status(200).send({ email, password, firstName, lastName });
    })
    .catch((error) => {
      console.error("There was an error while updating!");
      return res.status(500).send("There was an error while updating the user");
    });
});

router.get("/get-user", (req, res) => {
  let { firstName, lastName } = req.query;
  User.find({ firstName: firstName, lastName: lastName })
    .then((userArray) => {
      if (userArray.length === 0) {
        console.error(
          `No user were found with first name: ${firstName} & last name: ${lastName}`
        );
        return res.status(404).send("No user found");
      }
      return res.status(200).send(userArray);
    })
    .catch((error) => {
      console.error("Error occurred", error);
      return res.status(500).send("ERROR");
    });
});

module.exports = router;

// UPDATE user SET firstName = "Shantanu abc" WHERE email LIKE shantanu@email.com
