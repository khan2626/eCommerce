const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config(); // Load environment variables

const router = express.Router();

router.post("/subscribe", async (req, res) => {
  const { email } = req.body; // Get user email from request

  if (!email) {
    console.log("email required");
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    // Create transporter using your email provider
    const transporter = nodemailer.createTransport({
      service: "gmail", // Change to your email provider if needed
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // App-specific password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for subscribing!",
      text: "You've successfully subscribed to UBestClothings newsletter. Stay tuned for exclusive updates!",
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Subscription email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

module.exports = router;
