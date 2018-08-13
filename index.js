const express = require("express");
(bodyParser = require("body-parser")),
  (partners = require("./api/routes/partners"));
const path = require("path");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/partners", partners);

// Express will serve up production assets
// like our main.js file, or main.css file!
app.use(express.static("client/build"));

// Express will serve up the index.html file
// if it doesn't recognize the route
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

const PORT = process.env.PORT || 9000;
app.listen(PORT);
