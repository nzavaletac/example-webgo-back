const express = require("express");
const cors = require("cors");
const { connect } = require("./database");
const userRouter = require("./routes/users.routes");
const eventsRouter = require("./routes/events.routes");

const port = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(cors());
connect();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "It´s working",
  });
});

app.use("/users", userRouter);
app.use("/events", eventsRouter);

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
