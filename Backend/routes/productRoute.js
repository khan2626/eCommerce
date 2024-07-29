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

router.get("/", async (req, res) => {
  try {
    let products = await Products.find({});
    res.status(201).json({ success: true, products });
    console.log(products);
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Products.findOneAndDelete({ id: productId });

    if (!product) {
      return res
        .status(400)
        .json({ success: false, message: "product not found" });
    }
    res.status(200).json({ success: true, message: `${product.name} deleted` });
    console.log("product deleted successfully");
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

module.exports = router;
