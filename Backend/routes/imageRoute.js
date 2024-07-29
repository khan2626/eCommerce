const express = require("express");
const multer = require("multer");
const router = express.Router();
const path = require("path");

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
