const express = require("express");
const app = express();
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API running");
});
//Connect to Database
connectDB();

//Init middleware
app.use(express.json({ extended: false }));

//Defining Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
