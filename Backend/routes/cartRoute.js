const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/signup");

const getUser = async (req, res, next) => {
  const token = req.header("token");
  if (!token) {
    res.status(401).json({ errors: "Authenticate with valid token" });
  } else {
    try {
      const data = jwt.verify(token, "secret");
      req.user = data.user;
      next();
    } catch (errors) {
      res.status(401).json({ errors: "Please authenticate with valid token" });
    }
  }
};

router.post("/addCartData", getUser, async (req, res) => {
  try {
    const userData = await User.findOne({ _id: req.user.id });
    userData.cartData[req.body.itemId] += 1;
    await User.findOneAndUpdate(
      { _id: req.user.id },
      { cartData: userData.cartData }
    );
    // res.status(201).json({ success: true });
  } catch (error) {
    res.status(500).json({ errors: "Network/Server errorr" });
  }
});

router.post("/removeCartData", getUser, async (req, res) => {
  try {
    const userData = await User.findOne({ _id: req.user.id });
    userData.cartData[req.body.itemId] -= 1;
    await User.findOneAndUpdate(
      { _id: req.user.id },
      { cartData: userData.cartData }
    );
    // res.status(201).json({ success: true });
  } catch (error) {
    res.status(500).json({ errors: "Network/Server errorr" });
  }
});

router.get("/getCartData", getUser, async (req, res) => {
  try {
    const userData = await User.findOne({ _id: req.user.id });
    if (!userData) {
      res.status(404).json({ success: false, errors: "User not found" });
    } else {
      const userCartData = userData.cartData;
      res.status(200).json({ success: true, userCartData });
    }
  } catch (errors) {
    res.status(500).json({ errors });
  }
});

module.exports = router;
