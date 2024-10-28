const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const AuthRoutes = require("./routes/auth.route");
const UserRoutes = require("./routes/user.route");
const CompanyRoutes = require("./routes/company.route");

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", AuthRoutes);
app.use("/api/users", UserRoutes);
app.use("/api/companies", CompanyRoutes);
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to a database!");
    app.listen(PORT, () => {
      console.log(`app running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Connection failed", err);
  });
