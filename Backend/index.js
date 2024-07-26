const express = require("express");

const app = express();
PORT = 5000;

app.listen(PORT, () => {
  try {
    console.log(`server running on port ${PORT}`);
  } catch (error) {
    console.log(error.message);
  }
});
