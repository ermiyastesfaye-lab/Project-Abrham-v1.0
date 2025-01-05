const express = require("express");
const dotenv = require("dotenv");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const cookieParser = require("cookie-parser");
const AuthRoutes = require("./routes/auth.route");
const UserRoutes = require("./routes/user.route");
const CompanyRoutes = require("./routes/company.route");
const MessageRoutes = require("./routes/message.route");
const cors = require("cors");
const passwordReset = require("./routes/passwordReset");
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
app.use("/apis", passwordReset);
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

(async () => {
  try {
    await prisma.$connect();
    console.log("Connected to the PostgreSQL database!");
  } catch (err) {
    console.error("Failed to connect to the database", err);
  }
})();
