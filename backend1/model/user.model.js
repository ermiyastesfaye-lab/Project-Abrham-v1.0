const mongoose = require("mongoose");
const { isEmail, isLength } = require("validator");
const bcrypt = require("bcrypt");

const UserSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: [isEmail, "Please enter a valid email"],
    },
    role: {
      type: String,
      enum: ["company", "investor"],
    },
    password: {
      type: String,
      required: true,
      validate: [
        (value) => isLength(value, { min: 6, max: 10 }),
        "Password must be between 6 and 10 characters long.",
      ],
    },
  },
  {
    timestamps: true,
  }
);
UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
