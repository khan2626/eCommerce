const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  id: { type: Number },
  name: { type: String },
  image: { type: String },
  category: { type: String },
  oldPrice: { type: Number },
  newPrice: { type: Number },
  createdAt: { type: Date, default: Date.now },
});

const Products = mongoose.model("Products", productSchema);
module.exports = Products;
