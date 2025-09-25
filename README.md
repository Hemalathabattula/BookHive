<<<<<<< HEAD
# BookHive - Online Book Marketplace

BookHive is a modern web application for buying and selling second-hand books online. Built with Next.js, it provides a user-friendly platform for book enthusiasts to discover, purchase, and sell pre-loved books across various categories including fiction, non-fiction, and children's books.

## 🌟 Features

- **Browse Books**: Explore a vast collection of second-hand books across multiple categories
- **User Authentication**: Secure login and registration system
- **Shopping Cart**: Add books to cart and manage your purchases
- **Wishlist**: Save favorite books for later
- **Book Categories**: Organized sections for Fiction, Non-Fiction, and Children's books
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean and intuitive user interface with Tailwind CSS
- **API Integration**: RESTful API endpoints for seamless data management

## 🛠️ Technologies Used

- **Frontend**: Next.js 15, React 19, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: Tailwind CSS with custom components
- **Icons**: Lucide React
- **State Management**: React Context API
- **Form Handling**: React Hook Form

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (version 18 or higher)
- npm or yarn
- MongoDB (local or cloud instance)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bookhive
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add the following:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
bookhive/
├── src/
│   ├── app/
│   │   ├── about/              # About page
│   │   ├── account/            # User account page
│   │   ├── api/                # API routes
│   │   │   ├── auth/           # Authentication endpoints
│   │   │   ├── basket/         # Shopping cart endpoints
│   │   │   └── wishlist/       # Wishlist endpoints
│   │   ├── basket/             # Shopping cart page
│   │   ├── checkout/           # Checkout page
│   │   ├── children/           # Children's books page
│   │   ├── fiction/            # Fiction books page
│   │   ├── non-fiction/        # Non-fiction books page
│   │   ├── wishlist/           # Wishlist page
│   │   ├── components/         # Reusable React components
│   │   ├── context/            # React Context providers
│   │   ├── hooks/              # Custom React hooks
│   │   ├── lib/                # Utility libraries
│   │   ├── models/             # Database models
│   │   └── utils/              # Utility functions
│   ├── data/                   # Static data files
│   └── public/                 # Static assets
├── package.json
├── tailwind.config.js
└── README.md
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Basket
- `GET /api/basket` - Get user's cart
- `POST /api/basket/add` - Add item to cart
- `POST /api/basket/remove` - Remove item from cart
- `POST /api/basket/update` - Update cart item
- `POST /api/basket/checkout` - Checkout process

### Wishlist
- `GET /api/wishlist` - Get user's wishlist
- `POST /api/wishlist/add` - Add book to wishlist
- `POST /api/wishlist/remove` - Remove book from wishlist

## 🎨 Key Components

- **Header**: Navigation bar with menu and user options
- **Footer**: Site footer with links and information
- **BookCard**: Individual book display component
- **BookRecommendations**: Recently viewed books section
- **FictionProducts/NonFictionProducts/ChildrenProducts**: Category-specific product displays
- **Banner**: Dynamic banner component

## 📱 Pages

- **Home (/)**: Main landing page with featured books
- **About (/about)**: Information about BookHive
- **Fiction (/fiction)**: Fiction books category
- **Non-Fiction (/non-fiction)**: Non-fiction books category
- **Children (/children)**: Children's books category
- **Account (/account)**: User account management
- **Basket (/basket)**: Shopping cart
- **Wishlist (/wishlist)**: User's wishlist
- **Checkout (/checkout)**: Checkout process

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact our support team.

---

**BookHive** - Your feel-good place to buy and sell books online! 🌟
=======
# BookHive
>>>>>>> d134d4a301fb03accc106de08e2d1b86fad8f4f2
