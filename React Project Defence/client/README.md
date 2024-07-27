React Clothing Store
A modern e-commerce web application for browsing, searching, and managing clothing products. Built using React, React Router, and Tailwind CSS.

Table of Contents
Features
Installation
Usage
Project Structure
Components
Hooks
Context
Contributing
License
Features
User authentication (login and registration)
Browse and search for clothing items
Create and edit clothing items (admin functionality)
Pagination for product listing
Responsive design using Tailwind CSS
Installation
To get started with the project, follow these steps:


Install dependencies:

npm install

Start the development server:

npm run dev
The application will be available at http://localhost:5173.

Usage
Authentication
Login: Navigate to the login page and enter your credentials to sign in.
Register: Navigate to the registration page to create a new account.
Browsing Products
Catalog: Browse all available clothing items on the catalog page.
Search: Use the search functionality to find specific clothing items.
Managing Products
Create: Logged in  users can create new clothing items from the create page.
Edit: Owner of product can edit his own clothing listings.

Components
App.jsx
The main component that sets up the routes and provides the AuthContext.

Catalog.jsx
Displays a list of clothing products with pagination.

Create.jsx
Allows admin users to create new clothing items.

Login.jsx
Provides the login form for user authentication.

Hooks
useForm.js
A custom hook to manage form state and handle form submission.

useAuth.js
A custom hook to handle user authentication (login).

useClothes.js
A custom hook to fetch and manage clothing items data.

Context
authContext.js
Provides authentication state and functions to manage the authentication status.


