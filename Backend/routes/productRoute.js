const express = require("express");
const Products = require("../models/product");
const multer = require("multer");
const router = express.Router();
const path = require("path");

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

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/images");
  },
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
const upload = multer({ storage });

router.post("/", upload.single("image"), (req, res) => {
  try {
    res.status(201).json({
      success: "true",
      imageUrl: `http://localhost:5000/images/${req.file.filename}`,
    });
  } catch (error) {
    res.status(500).json({ success: "false", error });
  }
});

module.exports = router;
