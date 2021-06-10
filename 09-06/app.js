const express = require("express");
const app = express();
const axios = require("axios");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.get("/about-us", (req, res) => {
  res.status(200).send("This is About Us Page");
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  if (password === "123456789") {
    return res.status(200).send("Password is correct!");
  }
  return res.status(401).send("Incorrect password");
});

app.get("/pokemon", (req, res) => {
  axios
    .get("https://pokeapi.co/api/v2/ability/7/")
    .then((response) => {
      console.log(response.data);
      return res.status(200).send(response.data);
    })
    .catch((error) => {
      return res.status(500).send("error");
    });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`My Server is running on port ${PORT}`);
});
