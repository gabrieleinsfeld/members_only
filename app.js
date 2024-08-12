const express = require("express");
const app = express();
const mainRouter = require("./routes/mainRouter");
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
const { sessionMiddleware, initializePassport } = require("./auth");
const passport = require("passport");

app.use(sessionMiddleware());
app.use(...initializePassport());

require("dotenv").config();

app.use(express.static(assetsPath));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use("/", mainRouter);
app.post(
  "/log-in",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
  })
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));
