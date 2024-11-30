const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const AuthRoutes = require("./routes/auth.route");
const UserRoutes = require("./routes/user.route");
const CompanyRoutes = require("./routes/company.route");
const MessageRoutes = require("./routes/message.route");
const cors = require("cors");
const { protectRoute } = require("./middleware/protectRoute");

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api", AuthRoutes);
app.use("/api/users", UserRoutes);
app.use("/api/companies", protectRoute, CompanyRoutes);
app.use("/api/messages", MessageRoutes);
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
