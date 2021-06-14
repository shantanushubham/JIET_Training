const express = require("express");
const router = express();
const JWT = require("jsonwebtoken");

exports.isTokenValid = (req, res, next) => {
  if (!req.headers.token) {
    console.error("No token was sent");
    return res.status(403).send("Invalid token");
  }
  const decodedToken = JWT.verify(req.headers.token, "JIETSecretKey");
  console.log(decodedToken);
  next();
}