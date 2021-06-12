const User = require("../models/User");

exports.findUserByFirstNameAndLastName = (req, res) => {
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
};
