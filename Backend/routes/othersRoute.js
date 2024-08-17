const express = require("express");
const Products = require("../models/product");
const router = express.Router();

router.get("/newCollection", async (req, res) => {
  try {
    const products = await Products.find({});
    if (!products) {
      return res
        .status(401)
        .json({ success: false, errors: "no product found" });
    }
    const newCollection = products.slice(-8);
    res.status(201).json({ success: true, newCollection });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get("/womenPopular", async (req, res) => {
  try {
    const products = await Products.find({ category: "women" });
    if (!products) {
      return res
        .status(401)
        .json({ success: false, errors: "no product found" });
    }
    const womenPopular = products.slice(-4);
    res.status(201).json({ success: true, womenPopular });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
