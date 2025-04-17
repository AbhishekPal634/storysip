import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiX, HiMenu, HiUser, HiLogout, HiViewGrid } from "react-icons/hi";
import authService from "../api/services/authService";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const profileRef = useRef(null);

  // Check auth state and update UI
  const checkAuth = async () => {
    try {
      setIsLoading(true);
      const authenticated = authService.isAuthenticated();
      setIsAuthenticated(authenticated);

      if (authenticated) {
        const userData = await authService.getUser();
        if (userData) {
          setUser(userData);
          console.log("User data loaded:", userData);
        } else {
          // If we can't get user data, clear auth
          authService.logout();
          setIsAuthenticated(false);
          setUser(null);
        }
      } else {
        setUser(null);
      }
    } catch (err) {
      console.error("Error checking auth:", err);
      authService.logout();
      setIsAuthenticated(false);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Initial auth check
    checkAuth();

    // Subscribe to auth state changes
    const unsubscribe = authService.addAuthStateListener(checkAuth);

    // Close profile dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup
    return () => {
      unsubscribe();
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    authService.logout();
    setIsAuthenticated(false);
    setUser(null);
    setIsProfileOpen(false);
    navigate("/");
  };

  return (
    <nav className="bg-white border-b border-amber-100 shadow-sm text-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-['Playfair_Display',serif] font-bold tracking-tight"
        >
          <span className="text-gray-800">Story</span>
          <span className="text-amber-800">Sip</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="hover:text-amber-800 transition-colors">
            Home
          </Link>
          <Link to="/books" className="hover:text-amber-800 transition-colors">
            Browse Books
          </Link>
          {isAuthenticated && user?.role === "admin" && (
            <Link
              to="/admin"
              className="hover:text-amber-800 transition-colors"
            >
              Admin Dashboard
            </Link>
          )}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          {isLoading ? (
            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-amber-800"></div>
          ) : isAuthenticated ? (
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 hover:text-amber-800 transition-colors"
              >
                <HiUser className="text-xl" />
                <span>{user?.firstName}</span>
              </button>
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50"
                  >
                    Profile
                  </Link>
                  {user?.role === "admin" && (
                    <Link
                      to="/admin"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50"
                    >
                      Admin Dashboard
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-amber-50"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/auth"
              className="bg-amber-800 text-white px-4 py-2 rounded-md hover:bg-amber-900 transition-colors"
            >
              Login / Sign Up
            </Link>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <HiX className="text-2xl" />
          ) : (
            <HiMenu className="text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-amber-100">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              to="/"
              className="hover:text-amber-800 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/books"
              className="hover:text-amber-800 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Browse Books
            </Link>
            {isAuthenticated && user?.role === "admin" && (
              <Link
                to="/admin"
                className="hover:text-amber-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Admin Dashboard
              </Link>
            )}
            {!isAuthenticated && (
              <Link
                to="/auth"
                className="bg-amber-800 text-white px-4 py-2 rounded-md hover:bg-amber-900 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Login / Sign Up
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
