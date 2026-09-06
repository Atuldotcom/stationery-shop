# Stationery Shop - Project Structure

## Directory Organization

```
stationery-shop/
├── config/              # Configuration files
│   └── database.js      # MongoDB connection
├── models/              # Database models
│   ├── User.js          # User schema
│   ├── Product.js       # Product schema
│   └── Order.js         # Order schema
├── routes/              # API routes
│   ├── auth.js          # Authentication endpoints
│   ├── products.js      # Product endpoints
│   ├── orders.js        # Order endpoints
│   ├── users.js         # User profile endpoints
│   ├── cart.js          # Shopping cart endpoints
│   └── payments.js      # Payment endpoints
├── controllers/         # Business logic (to be created)
│   ├── authController.js
│   ├── productController.js
│   ├── orderController.js
│   ├── userController.js
│   ├── cartController.js
│   └── paymentController.js
├── middleware/          # Custom middleware (to be created)
│   ├── auth.js          # Authentication middleware
│   └── errorHandler.js  # Error handling middleware
├── utils/               # Utility functions (to be created)
│   ├── validators.js    # Input validation
│   └── helpers.js       # Helper functions
├── uploads/             # User uploads (images, etc.)
├── .env.example         # Environment variables template
├── .gitignore           # Git ignore rules
├── server.js            # Main server file
├── package.json         # NPM dependencies
└── PROJECT_STRUCTURE.md # This file
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Products
- `GET /api/products` - Get all products (with filters)
- `GET /api/products/:id` - Get product details
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

### Orders
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get order details
- `POST /api/orders` - Create order
- `PUT /api/orders/:id` - Update order status (Admin)

### Shopping Cart
- `GET /api/cart` - View cart
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/:itemId` - Update item quantity
- `DELETE /api/cart/:itemId` - Remove item
- `DELETE /api/cart` - Clear cart

### Users
- `GET /api/users/profile` - Get profile
- `PUT /api/users/profile` - Update profile
- `DELETE /api/users/account` - Delete account

### Payments
- `POST /api/payments/process` - Process payment
- `POST /api/payments/verify` - Verify payment
- `GET /api/payments/history` - Payment history

## Database Schema

### User
- firstName, lastName, email, password
- role (customer/admin)
- phone, address (street, city, state, zipCode, country)
- timestamps

### Product
- name, description, category
- price, discountPrice, stock
- rating, reviews
- images, brand, SKU
- tags, timestamps

### Order
- orderNumber, userId
- items (productId, quantity, price)
- totalAmount, shippingAddress
- status, paymentStatus, paymentMethod
- transactionId, trackingNumber, timestamps

## Next Steps

1. **Install dependencies**: `npm install`
2. **Setup MongoDB**: Create a local MongoDB instance or use MongoDB Atlas
3. **Configure .env**: Copy `.env.example` to `.env` and fill in values
4. **Implement Controllers**: Create business logic for each route
5. **Add Middleware**: Create authentication and error handling middleware
6. **Build Frontend**: Create React/Vue frontend in `client/` directory
7. **Testing**: Add tests for all endpoints
8. **Deployment**: Deploy to production

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT, bcryptjs
- **Payment**: Stripe
- **Frontend**: React/Vue.js (to be set up)
- **Deployment**: (Your choice)
