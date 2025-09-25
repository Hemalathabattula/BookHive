import { connectDB } from "../../../lib/mongodb";
import User from "../../../models/user";
import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";


export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const { username, email, password } = body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ error: "User already exists" }), { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password: hashedPassword });

    return new Response(JSON.stringify({ message: "User registered successfully", user }), { status: 201 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
