const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");

// always require and configure near the top
require("dotenv").config();

// connect to the database
require("./config/database");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(express.static(path.join(__dirname, "build")));

// Put API routes here, before the "catch all" route
app.use(require("./config/checkToken"));

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.use("/api/users", require("./routes/api/users"));
app.use("/api/journals", require("./routes/api/journals"));
app.use("/api/equipment", require("./routes/api/equipment"));
app.use("/api/hikes/spots", require("./routes/api/spots"));
app.use("/api/hikes/hike", require("./routes/api/hikes"));

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
