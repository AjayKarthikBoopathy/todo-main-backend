const mongoose = require("mongoose");

const conn = async (req, res) => {
  try {
    await mongoose
      .connect(
        // "mongodb+srv://ajay97:ajay97@cluster0.c76i2k0.mongodb.net/todo"
        "mongodb+srv://ajaykarthikbak97:ajayfullproject2024@cluster0.zup9pxs.mongodb.net/todo"
      )
      .then(() => {
        console.log("Connected");
      });
  } catch (error) {
    console.log(error);
  }
};
conn();
