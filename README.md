# StorySip

StorySip is a full-stack book review application built with the MERN stack (MongoDB, Express.js, React.js, and Node.js). It allows users to explore books, read and write reviews, and manage their reading preferences. The application features user authentication, role-based access control, and a responsive user interface.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
  - [Prerequisites](#prerequisites)
  - [Client Setup](#client-setup)
  - [Server Setup](#server-setup)
- [Client Documentation](#client-documentation)
  - [Pages Overview](#pages-overview)
  - [Key Components](#key-components)
- [Server Documentation](#server-documentation)
  - [API Routes](#api-routes)
  - [Authentication Levels](#authentication-levels)
  - [Models](#models)
- [License](#license)

## Features

- User authentication (signup, login, profile management)
- Browse and search books with filtering options
- Detailed book information pages
- User reviews and ratings
- Admin panel for managing books, users, and reviews
- Responsive design for mobile and desktop

## Tech Stack

### Frontend
- React.js with Vite
- React Router for navigation
- Tailwind CSS for styling
- Context API for state management

### Backend
- Node.js with Express
- MongoDB for database
- JWT for authentication
- Express Validator for input validation

## Setup Instructions

### Prerequisites

- Node.js (v14 or later)
- MongoDB (local installation or MongoDB Atlas account)
- Git

### Client Setup

1. Clone the repository:
   ```powershell
   git clone https://github.com/AbhishekPal634/storysip.git
   cd storysip
   ```

2. Install dependencies for the client:
   ```powershell
   cd client
   npm install
   ```

3. Create a `.env` file in the client directory with the following content:
   ```
   VITE_API_URL=http://localhost:5000/api
   ```

4. Start the development server:
   ```powershell
   npm run dev
   ```

5. The client will be available at `http://localhost:5173`

### Server Setup

1. Navigate to the server directory:
   ```powershell
   cd ../server
   npm install
   ```

2. Create a `.env` file in the server directory with the following content:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/storysip
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRE=30d
   ```

3. Start the server:
   ```powershell
   npm start
   ```

4. The server API will be available at `http://localhost:5000`

## Client Documentation

### Pages Overview

#### HomePage (`/`)
- Landing page with hero section, featured books, and call-to-action
- Displays top-rated books and recent additions

#### AuthPage (`/auth`)
- Combined login and signup page with tab navigation
- User authentication and registration forms

#### BooksPage (`/books`)
- Browse all books with search and filter capabilities
- Pagination for navigating through book listings

#### BookDetailPage (`/books/:id`)
- Detailed view of a specific book
- Contains book information, reviews, and review form for authenticated users

#### ProfilePage (`/profile`)
- User profile management
- Shows user's reviews and reading activity

#### AdminPage (`/admin`)
- Admin dashboard for managing application content
- Accessible only to users with admin role
- Contains tabs for managing books, users, and reviews

### Key Components

- **Navbar**: Site navigation and authentication status
- **BookCard**: Reusable component for displaying book previews
- **SearchAndFilter**: Book search and filtering controls
- **ReviewForm**: Form for submitting book reviews
- **StarRating**: Visual display of book ratings
- **AdminPanels**: Book, user, and review management interfaces

## Server Documentation

### API Routes

#### Authentication Routes

| Method | Endpoint        | Description           | Authentication Required |
|--------|-----------------|----------------------|-------------------------|
| POST   | /api/auth/register | Register new user    | No                     |
| POST   | /api/auth/login    | Login user           | No                     |
| GET    | /api/auth/me       | Get current user     | Yes                    |

#### Book Routes

| Method | Endpoint           | Description           | Authentication Required |
|--------|-------------------|----------------------|-------------------------|
| GET    | /api/books        | Get all books         | No                     |
| GET    | /api/books/featured | Get featured books    | No                     |
| GET    | /api/books/:id    | Get book by ID        | No                     |
| POST   | /api/books        | Create new book       | Yes (Admin)            |
| DELETE | /api/books/:id    | Delete book           | Yes (Admin)            |

#### Review Routes

| Method | Endpoint           | Description           | Authentication Required |
|--------|-------------------|----------------------|-------------------------|
| GET    | /api/reviews      | Get all reviews       | Yes (Admin)            |
| GET    | /api/reviews/book/:bookId | Get reviews for a book | No           |
| GET    | /api/reviews/user/:userId | Get user's reviews    | Yes           |
| POST   | /api/reviews      | Create new review     | Yes                    |
| PUT    | /api/reviews/:id  | Update review         | Yes (Owner)            |
| DELETE | /api/reviews/:id  | Delete review         | Yes (Owner or Admin)   |

#### User Routes

| Method | Endpoint           | Description           | Authentication Required |
|--------|-------------------|----------------------|-------------------------|
| GET    | /api/users        | Get all users         | Yes (Admin)            |
| GET    | /api/users/:id    | Get user profile      | Yes                    |
| GET    | /api/users/:id/reviews | Get user reviews      | Yes                |
| PUT    | /api/users/:id    | Update user profile   | Yes (Owner)            |
| DELETE | /api/users/:id    | Delete user account   | Yes (Owner)            |

### Authentication Levels

- **Public**: Accessible to all users without authentication
- **User**: Requires a valid JWT token from a logged-in user
- **Owner**: Requires authentication and resource ownership
- **Admin**: Requires authentication and admin role

### Models

#### User Model
- firstName: First name of the user
- lastName: Last name of the user
- email: User's email (unique identifier)
- password: Hashed password
- role: User role (user or admin)
- profile: Additional user profile information

#### Book Model
- title: Book title
- author: Book author
- description: Book description
- isbn: International Standard Book Number
- coverImage: URL to book cover image
- genre: Array of book genres
- publishedYear: Year of publication
- publisher: Book publisher
- pageCount: Number of pages
- language: Book language
- featured: Whether the book is featured
- averageRating: Average rating based on reviews
- totalReviews: Total number of reviews

#### Review Model
- book: Reference to Book model
- user: Reference to User model
- rating: Numeric rating (1-5)
- title: Review title
- content: Review content text
- createdAt: Date of review creation
