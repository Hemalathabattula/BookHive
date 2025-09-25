import { NextResponse } from 'next/server';
import { connectDB } from '../../../lib/mongodb';
import User from '../../../models/user';

export async function POST(request) {
  try {
    await connectDB();

    const { bookId, quantity } = await request.json();
    const userEmail = request.headers.get('user-email');

    if (!userEmail) {
      return NextResponse.json({ error: 'User not authenticated' }, { status: 401 });
    }

    if (!bookId || quantity === undefined) {
      return NextResponse.json({ error: 'Book ID and quantity are required' }, { status: 400 });
    }

    if (quantity < 0) {
      return NextResponse.json({ error: 'Quantity cannot be negative' }, { status: 400 });
    }

    const user = await User.findOne({ email: userEmail });
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const bookIdStr = String(bookId);
    const itemIndex = user.basket.findIndex(item => item.bookId === bookIdStr);

    if (itemIndex === -1) {
      return NextResponse.json({ error: 'Book not in basket' }, { status: 404 });
    }

    if (quantity === 0) {
      user.basket.splice(itemIndex, 1);
    } else {
      user.basket[itemIndex].quantity = quantity;
    }

    await user.save();

    return NextResponse.json({ message: 'Basket updated', basket: user.basket });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
