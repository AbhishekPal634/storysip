import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import BooksPage from './pages/BooksPage';
import BookDetailPage from './pages/BookDetailPage';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <div className="bg-[#fefaf6] min-h-screen font-['Lato',sans-serif]">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/books/:bookId" element={<BookDetailPage />} />
          <Route path="/admin" element={<AdminPage />} />
          {/* Add other routes like user profile later */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
