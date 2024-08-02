const express = require("express");
const app = express();

require("dotenv").config();
const connectDB = require("./config/config")

app.use(express.json());
app.use("/tasks", require("./routes/tasks"));

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});

