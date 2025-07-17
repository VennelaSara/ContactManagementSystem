const express = require("express");
const dotenv = require("dotenv").config();
const connectDb = require("./Config/connectDb");
const errorHandler = require("./middlewares/errorHandler");
const app = express();
const PORT = process.env.PORT || 5000;
connectDb();
const contactRoutes = require("./routes/contactRoutes");
app.use(express.json());

app.use("/contacts", contactRoutes);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`);
});
