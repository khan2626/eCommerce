const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  id: { type: Number },
  name: { type: String },
  oldPrice: { type: Number },
  newPrice: { type: Number },
  category: { type: String },
  image: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Products = mongoose.model("Products", productSchema);
module.exports = Products;
