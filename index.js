const express = require("express");
const app = express();
const appRouters = require("./src/routes");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");

require("dotenv").config();

app.use(cors());
app.use(helmet());
app.use(express.json());

//DB connectiona
(() => {
  mongoose
    .connect(process.env.DB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: true
    })
    .then(() => {
      console.log("Successfully connected to the Database");
    })
    .catch(() => {
      console.log(
        "Oops! Check you internet connection you seem to have trouble connecting to the database"
      );
    });
})();

app.use("/", appRouters);

const PORT = process.env.PORT || 4000;

const hostname = process.env.HOSTNAME || "localhost";

app.listen(PORT, () => {
  console.log(`Application server is running at http://${hostname}:${PORT} \n`);
});
