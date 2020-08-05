const express = require("express");
var app = express();
app.use(express.json());

let dotenv = require("dotenv");
dotenv.config();

let dbConnect = require("./DB/db-connection");
dbConnect();

const homeRouter = require("./routes/home");
const coursesRouter = require("./routes/courses");
const usersRouter = require("./routes/users");
app.use("/", homeRouter);
app.use("/api/courses", coursesRouter);
app.use("/api/users", usersRouter);

app.listen(9000, () => {
  console.log("Server listening on port 9000");
});
