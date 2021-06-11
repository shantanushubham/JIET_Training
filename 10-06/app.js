const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/UserRoute");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/jiet", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.info("MongoDB connected successfully");
  })
  .catch(() => {
    console.error("MongoDB connection failed.");
  });

app.use(userRoute);

const PORT = 7000;

app.listen(PORT, () => {
  console.log(`The server is running on port: ${PORT}`);
});
