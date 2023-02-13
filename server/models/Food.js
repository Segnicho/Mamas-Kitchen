import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  desc: {
    type: String,
    required: true,
    unique: true,
  },
  maxPeople: {
    type: Number,
    required: true,
  },
  availablity: {
    type: {
      Boolean,
    },
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
