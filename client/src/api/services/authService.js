import apiClient from "../config";

// Create an event system for auth state changes
const authEventListeners = new Set();

const notifyAuthStateChange = () => {
  authEventListeners.forEach((listener) => listener());
};

const authService = {
  register: async (userData) => {
    try {
      const response = await apiClient.post("/auth/register", userData);
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        notifyAuthStateChange();
      }
      return response.data;
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  },

  login: async (credentials) => {
    try {
      const response = await apiClient.post("/auth/login", credentials);
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        notifyAuthStateChange();
      }
      return response.data;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    notifyAuthStateChange();
  },

  getCurrentUser: async () => {
    try {
      const response = await apiClient.get("/auth/me");
      if (response.data) {
        const userData = {
          id: response.data._id,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
          role: response.data.role || "user",
        };
        localStorage.setItem("user", JSON.stringify(userData));
        notifyAuthStateChange();
        return userData;
      }
      return null;
    } catch (error) {
      console.error("Error fetching current user:", error);
      return null;
    }
  },

  isAuthenticated: () => {
    return !!localStorage.getItem("token");
  },

  getUser: async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return null;

      // First try to get from localStorage
      const userStr = localStorage.getItem("user");
      if (!userStr) {
        // If no user data in localStorage, fetch from server
        return await authService.getCurrentUser();
      }

      const user = JSON.parse(userStr);
      return user;
    } catch (error) {
      console.error("Error getting user data:", error);
      return null;
    }
  },

  // Add and remove event listeners
  addAuthStateListener: (listener) => {
    authEventListeners.add(listener);
    return () => authEventListeners.delete(listener);
  },
};

export default authService;
