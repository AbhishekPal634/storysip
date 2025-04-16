import React, { useState } from 'react';
import AdminHeader from '../components/admin/AdminHeader';
import AdminTabs from '../components/admin/AdminTabs';
import BooksPanel from '../components/admin/BooksPanel';
import UsersPanel from '../components/admin/UsersPanel';
import ReviewsPanel from '../components/admin/ReviewsPanel';
import AddBookModal from '../components/admin/AddBookModal';
import EditBookModal from '../components/admin/EditBookModal';

function AdminPage() {
  const [activeTab, setActiveTab] = useState('books');
  const [showAddBookModal, setShowAddBookModal] = useState(false);
  const [showEditBookModal, setShowEditBookModal] = useState(false);
  const [editingBook, setEditingBook] = useState(null);
  
  // Mock data for books
  const [books, setBooks] = useState([
    { id: 1, title: 'The Silent Echo', author: 'Elizabeth Murray', genre: 'Mystery', rating: 4.7, reviews: 104, published: '2024-10-15', cover: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Beneath Azure Skies', author: 'Samuel Richards', genre: 'Fantasy', rating: 4.9, reviews: 256, published: '2025-01-20', cover: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Quantum Dreams', author: 'Naomi Chen', genre: 'Sci-Fi', rating: 4.5, reviews: 87, published: '2024-08-05', cover: 'https://via.placeholder.com/150' },
    { id: 4, title: 'Whispers in the Dark', author: 'Marcus Johnson', genre: 'Horror', rating: 4.3, reviews: 132, published: '2024-09-12', cover: 'https://via.placeholder.com/150' },
    { id: 5, title: 'The Last Odyssey', author: 'Helen Porter', genre: 'Adventure', rating: 4.6, reviews: 198, published: '2025-02-08', cover: 'https://via.placeholder.com/150' },
  ]);
  
  // Mock data for users
  const users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', joined: '2024-08-15', reviews: 12, status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', joined: '2024-09-23', reviews: 8, status: 'Active' },
    { id: 3, name: 'Robert Johnson', email: 'robert.j@example.com', joined: '2024-10-11', reviews: 5, status: 'Inactive' },
    { id: 4, name: 'Lisa Brown', email: 'lisa.brown@example.com', joined: '2024-12-05', reviews: 19, status: 'Active' },
    { id: 5, name: 'Michael Wilson', email: 'michael.w@example.com', joined: '2025-01-18', reviews: 3, status: 'Active' },
  ];
  
  // Mock data for reviews
  const reviews = [
    { id: 1, bookTitle: 'The Silent Echo', user: 'John Doe', rating: 4, date: '2025-01-20', content: 'A thrilling mystery that kept me guessing until the end.' },
    { id: 2, bookTitle: 'Beneath Azure Skies', user: 'Lisa Brown', rating: 5, date: '2025-02-15', content: 'One of the best fantasy novels I\'ve read in years. Rich worldbuilding and characters.' },
    { id: 3, bookTitle: 'Quantum Dreams', user: 'Jane Smith', rating: 4, date: '2025-03-01', content: 'Fascinating concepts and well-written sci-fi. Highly recommended for genre fans.' },
    { id: 4, bookTitle: 'Whispers in the Dark', user: 'Michael Wilson', rating: 3, date: '2025-01-28', content: 'Creepy atmosphere but the plot could use more development.' },
    { id: 5, bookTitle: 'The Last Odyssey', user: 'Robert Johnson', rating: 5, date: '2025-02-22', content: 'An adventure that truly transports you to another world. Couldn\'t put it down!' },
  ];
  
  // Handler for deleting a book
  const handleDeleteBook = (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      setBooks(books.filter(book => book.id !== id));
    }
  };
  
  // Handler for editing a book
  const handleEditBook = (book) => {
    setEditingBook(book);
    setShowEditBookModal(true);
  };
  
  // Handler for saving edited book
  const handleSaveEdit = (editedBook) => {
    setBooks(books.map(book => book.id === editedBook.id ? editedBook : book));
    setShowEditBookModal(false);
  };
  
  // Handler for adding a new book
  const handleAddBook = (newBook) => {
    const maxId = Math.max(...books.map(book => book.id), 0);
    setBooks([...books, { ...newBook, id: maxId + 1 }]);
    setShowAddBookModal(false);
  };

  return (
    <div className="bg-[#fefaf6] min-h-screen">
      <AdminHeader />
      
      <div className="container mx-auto px-4 py-8">
        <AdminTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="bg-white shadow-sm border border-amber-100 rounded-lg p-6 mt-6">
          {activeTab === 'books' && (
            <BooksPanel 
              books={books} 
              onAddBook={() => setShowAddBookModal(true)} 
              onEditBook={handleEditBook} 
              onDeleteBook={handleDeleteBook} 
            />
          )}
          
          {activeTab === 'users' && (
            <UsersPanel users={users} />
          )}
          
          {activeTab === 'reviews' && (
            <ReviewsPanel reviews={reviews} />
          )}
        </div>
      </div>
      
      {/* Modals */}
      {showAddBookModal && (
        <AddBookModal onClose={() => setShowAddBookModal(false)} onAddBook={handleAddBook} />
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