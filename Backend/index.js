const express = require("express");
const { connectDB } = require("./utils/db");
const Products = require("./models/product");
const productRoute = require("./routes/productRoute");
const imageRoute = require("./routes/imageRoute");
const userRoute = require("./routes/userRoute");
const othersRoute = require("./routes/othersRoute");
const cartRoute = require("./routes/cartRoute");

const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 5000 || process.env.PORT;
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
  credentials: true,
};

connectDB().then(() => {
  app.use(cors(corsOptions));
  app.use(express.json());
  app.use("/images", express.static("./uploads/images"));
  app.use("/products", productRoute);
  app.use("/uploads", imageRoute);
  app.use("/user", userRoute);
  app.use("/others", othersRoute);
  app.use("/cart", cartRoute);

  //   app.use(cors(corsOptions));
  app.listen(PORT, () => {
    try {
      console.log(`server running on port ${PORT}`, (Debug = true));
    } catch (error) {
      console.log(error.message);
    }
  });
});
