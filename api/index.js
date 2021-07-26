const express = require("express");
const mongoose = require('mongoose');
const authRoute = require("./routes/auth");
require("dotenv").config();
const app = express();

mongoose
  .connect(process.env.MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then((res) => console.log("Connected to database"))
  .catch((err) => console.log(err));


app.use(express.json())
  app.use("/api/auth", authRoute);

app.listen(process.env.PORT, () => {
  console.log(`listening to the port ${process.env.PORT}`);
});