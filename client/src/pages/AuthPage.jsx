import React, { useState } from 'react';
import AuthHeader from '../components/auth/AuthHeader';
import AuthTabs from '../components/auth/AuthTabs';
import LoginForm from '../components/auth/LoginForm';
import SignupForm from '../components/auth/SignupForm';

function AuthPage() {
  const [activeTab, setActiveTab] = useState('login');

  // Form submission handlers
  const handleLoginSubmit = (loginData) => {
    console.log('Login submitted:', loginData);
    // handle authentication here
  };

  const handleSignupSubmit = (signupData) => {
    console.log('Signup submitted:', signupData);
    // handle user registration here
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

          <div className="p-6">
            {activeTab === 'login' ? (
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
