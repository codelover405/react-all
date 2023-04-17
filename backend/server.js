const express = require("express");
const mongoDb = require("./config/db");
const app = express();
const userRoute = require("./routes/userRoute");

// db connection
mongoDb();

// middleware
app.use(express.json());

app.use("/api/", userRoute);

const port = 5000;
app.listen(port, () => console.log(`connect : http://localhost/${port}`));
