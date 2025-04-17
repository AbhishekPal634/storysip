import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../api/services/authService";
import userService from "../api/services/userService";
import { HiPencil, HiTrash } from "react-icons/hi";

function ProfilePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const currentUser = await authService.getUser();
        if (!currentUser) {
          navigate("/auth");
          return;
        }
        setUser(currentUser);
        setFormData({
          firstName: currentUser.firstName,
          lastName: currentUser.lastName,
          email: currentUser.email,
        });

        // Fetch user reviews
        const userReviews = await userService.getUserReviews(currentUser.id);
        setReviews(userReviews);
      } catch (err) {
        setError("Failed to load profile data");
        console.error("Error fetching profile:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await userService.updateUser(user.id, formData);
      const updatedUser = await authService.getCurrentUser();
      setUser(updatedUser);
      setIsEditing(false);
    } catch (err) {
      setError("Failed to update profile");
      console.error("Error updating profile:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteReview = async (reviewId) => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      try {
        await userService.deleteReview(reviewId);
        setReviews((prev) => prev.filter((review) => review._id !== reviewId));
      } catch (err) {
        setError("Failed to delete review");
        console.error("Error deleting review:", err);
      }
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-amber-800 border-t-transparent"></div>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-12 font-['Lato',sans-serif]">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-['Playfair_Display',serif] text-3xl font-bold mb-8 text-gray-800">
          Profile
        </h1>

        {error && <div className="text-red-600 mb-4">{error}</div>}

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-['Playfair_Display',serif] text-xl font-semibold text-gray-800">
              Personal Information
            </h2>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="text-amber-800 hover:text-amber-900"
            >
              <HiPencil className="text-xl" />
            </button>
          </div>

          {isEditing ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                  required
                />
              </div>
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="bg-amber-800 text-white px-4 py-2 rounded-md hover:bg-amber-900"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <p className="mt-1 text-gray-900">{user.firstName}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <p className="mt-1 text-gray-900">{user.lastName}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <p className="mt-1 text-gray-900">{user.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Role
                </label>
                <p className="mt-1 text-gray-900 capitalize">{user.role}</p>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="font-['Playfair_Display',serif] text-xl font-semibold text-gray-800 mb-6">
            My Reviews
          </h2>
          {reviews.length === 0 ? (
            <p className="text-gray-600">
              You haven't written any reviews yet.
            </p>
          ) : (
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review._id} className="border-b border-gray-200 pb-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {review.book?.title || "Book Title"}
                      </h3>
                      <div className="flex items-center mt-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-xl ${
                                i < review.rating
                                  ? "text-amber-500"
                                  : "text-gray-300"
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeleteReview(review._id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <HiTrash className="text-xl" />
                    </button>
                  </div>
                  <p className="mt-2 text-gray-600">{review.content}</p>
                  <p className="mt-2 text-sm text-gray-500">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
