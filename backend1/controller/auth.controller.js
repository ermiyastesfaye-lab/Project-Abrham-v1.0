const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
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
    const { userName, email, role, password } = req.body;
    if (!userName || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (password.length < 6 || password.length > 10) {
      return res
        .status(400)
        .json({ error: "Password must be between 6 and 10 characters long" });
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await prisma.user.create({
      data: {
        userName,
        email,
        role,
        password: hashedPassword,
      },
    });
    const token = createToken(user.id);
    res.cookie("jwt", token, { maxAge: maxAge * 1000 });
    res.cookie("userId", user.id, { maxAge: maxAge * 1000 });
    res.cookie("role", user.role, { maxAge: maxAge * 1000 });
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
    const user = await prisma.user.findFirst({
      where: {
        userName,
      },
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "the password is incorrect" });
    }
    const token = createToken(user.id);
    req.userId = user.id;
    res.cookie("jwt", token, {
      // httpOnly: true,
      maxAge: maxAge * 1000,
    });
    res.cookie("userId", user.id, {
      // httpOnly: true,
      maxAge: maxAge * 1000,
      domain: "localhost",
      path: "/",
    });
    res.cookie("role", user.role, {
      // httpOnly: true,
      maxAge: maxAge * 1000,
    });
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
