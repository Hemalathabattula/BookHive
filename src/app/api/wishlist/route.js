import { NextResponse } from 'next/server';
import { connectDB } from '../../lib/mongodb';
import User from '../../models/user';

export async function GET(request) {
  try {
    await connectDB();

    const userEmail = request.headers.get('user-email');
    if (!userEmail) {
      return NextResponse.json({ error: 'User not authenticated' }, { status: 401 });
    }

    const user = await User.findOne({ email: userEmail });
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ wishlist: user.wishlist });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
