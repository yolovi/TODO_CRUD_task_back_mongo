const express = require("express");
const app = express();

require("dotenv").config();

//app.use(express.json());
app.use("/", require("./routes/tasks"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});

