const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
  {
    imageURL: String,
  },
  { timestamps: true }
);

const Image = mongoose.model("image", imageSchema);
module.exports = Image;