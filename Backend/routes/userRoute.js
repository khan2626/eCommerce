const express = require("express");
const router = express.Router();
const User = require("../models/signup");
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
  try {
    let users = await User.findOne({ email: req.body.email });
    if (users) {
      return res
        .status(400)
        .json({ success: false, error: "Existing user with same email" });
    } else {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      console.log(user);
      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(payload, "secret");

      res.status(200).json({ success: true, token });
    }
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    res.status(400).json({ success: false, errors: "Invalid email address" });
  }
  const passCompare = user.password === req.body.password;
  if (!passCompare) {
    res.status(400).json({ success: false, errors: "Invalid password" });
  }
  const payload = {
    user: {
      id: user.id,
    },
  };
  const token = jwt.sign(payload, "secret");

  res.status(200).json({ success: true, token });
  console.log(`${user.name} logged in`);
});

module.exports = router;
