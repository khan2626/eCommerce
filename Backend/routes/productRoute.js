const express = require("express");
const router = express.Router();
const Products = require("../models/product");

router.post("/", async (req, res) => {
  try {
    const allProduct = await Products.find({});
    let id;

    if (allProduct.length > 0) {
      let lastProduct = allProduct[allProduct.length - 1];
      id = lastProduct.id + 1;
    } else {
      id = 1;
    }

    const product = new Products({
      id: id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      oldPrice: req.body.oldPrice,
      newPrice: req.body.newPrice,
    });
    await product.save();
    res.status(201).json({ success: "true" });
    console.log(`${product.name} added successfully`);
  } catch (error) {
    res.status(500).json({ success: "false", error });
  }
});

module.exports = router;
