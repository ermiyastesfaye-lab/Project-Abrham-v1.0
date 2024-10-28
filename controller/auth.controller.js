const User = require("../model/user.model");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

dotenv.config();

const maxAge = 6 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};

const signup = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.cookie("userId", user._id, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json(user);
  } catch (err) {
    if (err.code === 11000) {
      return res
        .status(500)
        .json({ message: err.message, duplicate: "Duplicate entry" });
    }
    res.status(500).json({ message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName: userName });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "the password is incorrect" });
    }
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.cookie("userId", user._id, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 1 });
    res.cookie("userId", "", { maxAge: 1 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { signup, login, logout };
