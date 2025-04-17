import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import AdminHeader from "../components/admin/AdminHeader";
import AdminTabs from "../components/admin/AdminTabs";
import BooksPanel from "../components/admin/BooksPanel";
import UsersPanel from "../components/admin/UsersPanel";
import ReviewsPanel from "../components/admin/ReviewsPanel";
import AddBookModal from "../components/admin/AddBookModal";
import EditBookModal from "../components/admin/EditBookModal";
import bookService from "../api/services/bookService";
import userService from "../api/services/userService";
import authService from "../api/services/authService";

function AdminPage() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("books");
  const [showAddBookModal, setShowAddBookModal] = useState(false);
  const [showEditBookModal, setShowEditBookModal] = useState(false);
  const [editingBook, setEditingBook] = useState(null);
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const userData = await authService.getUser();
        setUser(userData);
      } catch (err) {
        console.error("Error checking auth:", err);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  useEffect(() => {
    if (user?.role === "admin") {
      fetchData();
    }
  }, [activeTab, user]);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError("");

      switch (activeTab) {
        case "books":
          const booksData = await bookService.getBooks({ limit: 100 });
          setBooks(booksData.books);
          break;
        case "users":
          const usersData = await userService.getUsers();
          setUsers(usersData.users || []);
          break;
        case "reviews":
          const reviewsData = await userService.getAllReviews();
          setReviews(reviewsData.reviews || []);
          break;
      }
    } catch (err) {
      setError("Failed to load data. Please try again later.");
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-800"></div>
      </div>
    );
  }

  if (!user || user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  // Handler for deleting a book
  const handleDeleteBook = async (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      try {
        await bookService.deleteBook(id);
        setBooks(books.filter((book) => book._id !== id));
      } catch (err) {
        setError("Failed to delete book. Please try again.");
      }
    }
  };

  // Handler for editing a book
  const handleEditBook = (book) => {
    setEditingBook(book);
    setShowEditBookModal(true);
  };

  // Handler for saving edited book
  const handleSaveEdit = async (editedBook) => {
    try {
      await bookService.updateBook(editedBook._id, editedBook);
      setBooks(
        books.map((book) => (book._id === editedBook._id ? editedBook : book))
      );
      setShowEditBookModal(false);
    } catch (err) {
      setError("Failed to update book. Please try again.");
    }
  };

  // Handler for adding a new book
  const handleAddBook = async (newBook) => {
    try {
      const addedBook = await bookService.createBook(newBook);
      setBooks([...books, addedBook]);
      setShowAddBookModal(false);
    } catch (err) {
      setError("Failed to add book. Please try again.");
    }
  };

  // Handler for deleting a user
  const handleDeleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await userService.deleteUser(id);
        setUsers(users.filter((user) => user._id !== id));
      } catch (err) {
        setError("Failed to delete user. Please try again.");
      }
    }
  };

  // Handler for deleting a review
  const handleDeleteReview = async (id) => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      try {
        await userService.deleteReview(id);
        setReviews(reviews.filter((review) => review._id !== id));
      } catch (err) {
        setError("Failed to delete review. Please try again.");
      }
    }
  };

  return (
    <div className="bg-[#fefaf6] min-h-screen">
      <AdminHeader />

      <div className="container mx-auto px-4 py-8">
        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
            {error}
          </div>
        )}

        <AdminTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="bg-white shadow-sm border border-amber-100 rounded-lg p-6 mt-6">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-amber-800 border-t-transparent"></div>
            </div>
          ) : (
            <>
              {activeTab === "books" && (
                <BooksPanel
                  books={books}
                  onAddBook={() => setShowAddBookModal(true)}
                  onEditBook={handleEditBook}
                  onDeleteBook={handleDeleteBook}
                />
              )}

              {activeTab === "users" && (
                <UsersPanel users={users} onDeleteUser={handleDeleteUser} />
              )}

              {activeTab === "reviews" && (
                <ReviewsPanel
                  reviews={reviews}
                  onDeleteReview={handleDeleteReview}
                />
              )}
            </>
          )}
        </div>
      </div>

      {/* Modals */}
      {showAddBookModal && (
        <AddBookModal
          onClose={() => setShowAddBookModal(false)}
          onAddBook={handleAddBook}
        />
      )}

      {showEditBookModal && (
        <EditBookModal
          book={editingBook}
          onClose={() => setShowEditBookModal(false)}
          onSaveEdit={handleSaveEdit}
        />
      )}
    </div>
  );
}

export default AdminPage;
