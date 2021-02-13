const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./app/models");
db.sequalize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

const app = express();

let corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Nahoko's app."});
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}.`);
})

