const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const db = require("./models");

db.sequelize.sync();

const corsOptions = {
  origin: "http://localhost:9999"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to CRUD application." });
});


const PORT = process.env.PORT || 9999;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

require("./routes/studentroutes.js")(app);