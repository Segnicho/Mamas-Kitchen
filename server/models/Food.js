import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  desc: {
    type: String,
    required: true,
  },
  

  price: {
    type: Number,
    required: true,
  },

  branch: {
    type: String,
  },
});

export default mongoose.model("Food", FoodSchema);
