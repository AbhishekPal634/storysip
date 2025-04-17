import apiClient from "../config";

const userService = {
  // Get all users (admin only)
  getUsers: async () => {
    const response = await apiClient.get("/users");
    return response.data;
  },

  // Get user by ID
  getUserById: async (id) => {
    const response = await apiClient.get(`/users/${id}`);
    return response.data;
  },

  // Update user
  updateUser: async (id, userData) => {
    const response = await apiClient.put(`/users/${id}`, userData);
    return response.data;
  },

  // Delete user
  deleteUser: async (id) => {
    await apiClient.delete(`/users/${id}`);
  },

  // Get user reviews
  getUserReviews: async (userId) => {
    const response = await apiClient.get(`/users/${userId}/reviews`);
    return response.data;
  },

  // Get all reviews (admin only)
  getAllReviews: async () => {
    const response = await apiClient.get("/reviews");
    return response.data;
  },

  // Delete a review
  deleteReview: async (reviewId) => {
    await apiClient.delete(`/reviews/${reviewId}`);
  },
};

export default userService;
