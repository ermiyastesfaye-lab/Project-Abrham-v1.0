const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const crypto = require("crypto");

router.post("/forgotpassword", async (req, res) => {
  console.log(process.env.EMAIL_PASS);
  try {
    const { email } = req.body;
    console.log(email);
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).send("User not found");
    }

    const token = crypto.randomBytes(32).toString("hex");

    await prisma.user.update({
      where: { email },
      data: {
        resetToken: token,
        resetTokenExpiration: new Date(Date.now() + 3600000), // 1 hour
      },
    });

    const transporter = nodemailer.createTransport({
      service: "gmail", // Use your email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      to: email,
      subject: "Password Reset",
      html: `<p>You requested a password reset. Click <a href="http://localhost:3000/reset-password/${token}">here</a> to reset your password.</p>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send("Error sending email");
      }
      res.send("Password reset link sent");
    });
  } catch (error) {
    console.error("Error in forgot password route:", error);
    res.status(500).send("An error occurred");
  }
});

router.post("/resetpassword/:token", async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;
  const user = await prisma.user.findFirst({
    where: {
      resetToken: token,
      resetTokenExpiration: {
        gte: new Date(Date.now()),
      },
    },
  });

  if (!user) {
    return res.status(400).send("Invalid token or token expired");
  }

  await prisma.user.update({
    where: { id: user.id },
    data: {
      password: await bcrypt.hash(newPassword, 10),
      resetToken: null,
      resetTokenExpiration: null,
    },
  });

  res.send("Password has been reset");
});

module.exports = router;
