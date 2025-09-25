import { NextResponse } from 'next/server';
import { connectDB } from '../../../lib/mongodb';
import User from '../../../models/user';

export async function POST(request) {
  try {
    await connectDB();

    const { bookId } = await request.json();
    const userEmail = request.headers.get('user-email');

    if (!userEmail) {
      return NextResponse.json({ error: 'User not authenticated' }, { status: 401 });
    }

    if (!bookId) {
      return NextResponse.json({ error: 'Book ID is required' }, { status: 400 });
    }

    const user = await User.findOne({ email: userEmail });
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const bookIdStr = String(bookId);
    user.wishlist = user.wishlist.filter(id => id !== bookIdStr);
    await user.save();

    return NextResponse.json({ message: 'Book removed from wishlist', wishlist: user.wishlist });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
