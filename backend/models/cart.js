// Express backend: models/CartItem.js
import mongoose from "mongoose";

const CartItemSchema = new mongoose.Schema({
  productId: String,
  name: String,
  image: String,
  price: Number,
  quantity: {
    type: Number,
    default: 1,
  },
});

export default mongoose.models.CartItem || mongoose.model("CartItem", CartItemSchema);
