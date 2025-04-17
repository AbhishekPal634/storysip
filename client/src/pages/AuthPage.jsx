import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthHeader from "../components/auth/AuthHeader";
import AuthTabs from "../components/auth/AuthTabs";
import LoginForm from "../components/auth/LoginForm";
import SignupForm from "../components/auth/SignupForm";
import authService from "../api/services/authService";

function AuthPage() {
  const [activeTab, setActiveTab] = useState("login");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Form submission handlers
  const handleLoginSubmit = async (loginData) => {
    try {
      setError("");
      await authService.login(loginData);
      navigate("/books");
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  const handleSignupSubmit = async (signupData) => {
    try {
      setError("");
      await authService.register(signupData);
      navigate("/books");
    } catch (err) {
      setError(
        err.response?.data?.message || "Registration failed. Please try again."
      );
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo and Header */}
        <AuthHeader />

        {/* Auth Card */}
        <div className="bg-white rounded-lg shadow-sm border border-amber-100 overflow-hidden">
          {/* Tabs Navigation */}
          <AuthTabs activeTab={activeTab} setActiveTab={setActiveTab} />

          {error && (
            <div className="px-6 py-2 bg-red-50 text-red-600 text-sm">
              {error}
            </div>
          )}

          <div className="p-6">
            {activeTab === "login" ? (
              <LoginForm onSubmit={handleLoginSubmit} />
            ) : (
              <SignupForm onSubmit={handleSignupSubmit} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
