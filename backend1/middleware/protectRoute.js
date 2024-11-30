const jwt = require("jsonwebtoken");
const protectRoute = (req, res, next) => {
  console.log("RequireAuth middleware called");
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        console.log("Token Invalid");
        return err.message;
      } else {
        console.log(decodedToken);
        req.user = decodedToken.id;
        next();
      }
    });
  } else {
    res.status(404).json({ message: "No token available" });
  }
};

module.exports = { protectRoute };
