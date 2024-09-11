E-commerce Website - Frontend Development Assignment

Overview

This project is an e-commerce website developed as part of a frontend development assignment. The project focuses on building a clean, modular, and scalable architecture using a frontend framework. The website provides functionalities such as user login, role-based access control, product listing with search and pagination, cart management, and order placement.

Features

    1. Framework
    Built using: React.js.
    The project is structured in a modular and scalable way to ensure maintainability.
    
    2. User Login and Role-Based Access Control
    Login Page: Users can log in using a username and password.
    Role-Based Access:
    Admins have access to product management pages.
    Regular users can browse and purchase products but cannot access admin-level functionalities.
    State Management: The login state is maintained across pages. Users are redirected based on their roles after logging in (e.g., admins to product management, users to product listings).
    
    3. Product Listing and Search
    Product List: Displays a list of products fetched from a JSON Server (simulated backend).
    Search Functionality: Users can search for products by name, category, or price range.
    Pagination: The product listing includes pagination to improve the user experience when dealing with large data sets.

    
    4. Cart Functionality
    Add to Cart: Users can add products to their cart.
    Update Quantity/Remove Items: Users can modify the quantity or remove items from their cart.
    
    Cart Summary: A summary page displays the selected items and the total price before proceeding to checkout.
    
    5. Order Placement
    Checkout Page: Users can review their cart and confirm their order.
    Order Confirmation: After placing the order, users receive visual feedback in the form of an order confirmation screen.
    
    6. Backend Simulation
    JSON Server: A JSON Server is used to simulate backend API calls for:
    Fetching product data.
    Managing cart operations.
    Simulating order placement.
    No actual backend APIs are built; API calls mimic real-world interactions

Getting Started

Prerequisites
Node.js and npm should be installed on your machine.

Install dependencies:

npm install 

Start the development server:

npm start 

e-commerce-frontend/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── utils/
│   ├── App.js
│   ├── index.js
├── db.json (Simulated backend data)
├── README.md
└── package.json


Key Directories:

1.components/: Reusable UI components (e.g., ProductCard, CartItem).
2.pages/: Different pages of the website (e.g., Login, ProductList, Cart, Checkout).
3.services/: API calls to the JSON Server.
4.utils/: Helper functions (e.g., authentication, role checks).


Simulated API

-The JSON Server (db.json) simulates the following API endpoints:
-GET /products: Fetch the list of products.
-POST /cart: Add products to the cart.
-POST /orders: Place an order.

Future Improvements

-Authentication Security: Implement token-based authentication for real-world use.
-Backend Integration: Replace JSON Server with real backend APIs.
-Admin Panel: Expand product management features for admins.



This README gives an overview of your project, setup instructions, and an outline of its features. You can adjust the details based on your implementation.
