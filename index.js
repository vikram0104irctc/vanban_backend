require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connection } = require("./db/connection");
const { registerRoute } = require("./routes/register.route");
const { loginRoute } = require("./routes/login.route");
const { authMiddleware } = require("./middleware/auth.middleware");
const { taskRoute } = require("./routes/task.route");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/hellotest", (req,res)=>{
  res.send("Hello, Test!");
})

app.use("/register", registerRoute);

app.use("/login", loginRoute);

app.use(authMiddleware);

app.use("/task", taskRoute);

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  console.log(`Server is running on port http://localhost:${port}`);
  await connection;
  console.log("DB connection established");
});
