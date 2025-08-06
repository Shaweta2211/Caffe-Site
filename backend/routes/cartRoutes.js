import express from "express";
import CartItem from "../models/CartItem.js";

const router = express.Router();

// Get all cart items
router.get("/", async (req, res) => {
  const items = await CartItem.find();
  res.json(items);
});

// Add to cart
router.post("/add", async (req, res) => {
  const { productId, name, image, price } = req.body;

  // Check if item already exists
  const existing = await CartItem.findOne({ productId });
  if (existing) {
    existing.quantity += 1;
    await existing.save();
    return res.json(existing);
  }

  const item = new CartItem({ productId, name, image, price });
  await item.save();
  res.json(item);
});

// Update quantity
router.put("/update/:id", async (req, res) => {
  const { quantity } = req.body;
  const item = await CartItem.findByIdAndUpdate(req.params.id, { quantity }, { new: true });
  res.json(item);
});

// Remove item
router.delete("/remove/:id", async (req, res) => {
  await CartItem.findByIdAndDelete(req.params.id);
  res.json({ message: "Removed" });
});

export default router;
