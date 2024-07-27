const mongoose = require("mongoose");
const url = `mongodb+srv://israelkhan217:examination217@ecommerce.wpztbqz.mongodb.net/e-commerce`;
async function connectDB() {
  try {
    await mongoose.connect(url);
    console.log("Connected to database successfully");
  } catch (error) {
    console.error("error connecting to database", error);
  }
}

module.exports = { connectDB };
