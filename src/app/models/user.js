import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  wishlist: { type: [String], default: [] }, // Array of book IDs
  basket: { type: [{ bookId: String, quantity: Number }], default: [] }, // Array of basket items with quantity
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
