const JWT = require("jsonwebtoken");

exports.isTokenValid = (req, res, next) => {
  try {
    if (!req.headers.token) {
      console.error("No token was sent");
      return res.status(403).send("Invalid token");
    }
    const decodedToken = JWT.verify(req.headers.token, "JIETSecretKey");
    if (decodedToken.email === req.body.email) {
      return next();
    }
    console.warn("User sent suspicious token!");
    return res.status(417).send("Please send valid token!");
  } catch (error) {
    console.error("Token Validation failed.");
    return res.status(401).send("Token invalid.");
  }
};
