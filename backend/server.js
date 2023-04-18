const express = require("express");
const mongoDb = require("./config/db");
const app = express();
var cors = require("cors");
const userRoute = require("./routes/userRoute");

// db connection
mongoDb();

app.use(cors());

// middleware
app.use(express.json());

app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/", userRoute);

const port = 5000;
app.listen(port, () => console.log(`connect : http://localhost/${port}`));
