const express = require("express");
const router = express.Router();
const User = require("../models/signup");
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
  try {
    let userCheck = await User.findOne({ email: req.body.email });
    if (userCheck) {
      return res
        .status(400)
        .json({ success: false, errors: "Existing user with same email" });
    } else {
      let cart = {};
      for (let i = 0; i < 300; i++) {
        cart[i] = 0;
      }

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        cartData: cart,
      });
      console.log(newUser);
      await newUser.save();

      const payload = {
        user: {
          id: newUser.id,
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
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, errors: "Invalid email address" });
    }

    const passCompare = user.password === req.body.password;

    if (!passCompare) {
      return res
        .status(401)
        .json({ success: false, errors: "Invalid password" });
    }
    const payload = {
      user: {
        id: user.id,
      },
    };
    const token = jwt.sign(payload, "secret");

    res.status(200).json({ success: true, token });
    console.log(`${user.name} logged in`);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
