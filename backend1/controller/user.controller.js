const express = require("express");
const User = require("../model/user.model");
const { trusted } = require("mongoose");

const getUsers = async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user fields
    if (req.body.password) {
      user.password = req.body.password; // Setting a new password will trigger the "pre('save')" hook
    }
    if (req.body.userName) {
      user.userName = req.body.userName;
    }
    if (req.body.email) {
      user.email = req.body.email;
    }

    // Save the user to trigger the pre-save hook
    const updatedUser = await user.save();

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ messgae: "User not found" });
    }
    res.status(200).json({ message: "User deleted Successfully" });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const getUsersForSidebar = async (req, res) => {
  try {
    const userId = req.cookies.userId;
    const users = await User.find({ _id: { $ne: userId } });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  getUsersForSidebar,
};
