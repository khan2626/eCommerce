const express = require("express");
const { connectDB } = require("./utils/db");
const Products = require("./models/product");
const productRoute = require("./routes/productRoute");
const imageRoute = require("./routes/imageRoute");
//const cors = require("cors");

const app = express();
PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.use(express.json());
  app.use("/images", express.static("./uploads/images"));
  app.use("/addProducts", productRoute);
  app.use("/uploads", imageRoute);
  app.use("/deleteProduct", productRoute);
  //   app.use(cors(corsOptions));
  app.listen(PORT, () => {
    try {
      console.log(`server running on port ${PORT}`);
    } catch (error) {
      console.log(error.message);
    }
  });
});

// const corsOptions = {
//   origin: "http://localhost:5000",
//   optionsSuccessStatus: 200,
//   credentials: true,
// };

// connectDB().then(() => {
//   console.log("connec");
// });
