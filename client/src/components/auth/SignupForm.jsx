import React from "react";
import { HiMail, HiLockClosed } from "react-icons/hi";

const SignupForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.target);
    const firstName = formData.get("first-name");
    const lastName = formData.get("last-name");
    const email = formData.get("email");
    const password = formData.get("password");
    const agreeToTerms = formData.get("terms") === "on";

    onSubmit({ firstName, lastName, email, password, agreeToTerms });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        {/* Name Fields */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              First name
            </label>
            <input
              type="text"
              id="first-name"
              name="first-name"
              required
              className="appearance-none block w-full px-3 py-2 border border-amber-200 rounded focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Last name
            </label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              required
              className="appearance-none block w-full px-3 py-2 border border-amber-200 rounded focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none"
            />
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="signup-email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiMail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="signup-email"
              name="email"
              type="email"
              required
              className="appearance-none block w-full pl-10 pr-3 py-2 border border-amber-200 rounded focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none"
              placeholder="you@example.com"
            />
          </div>
        </div>

        {/* Password Field */}
        <div>
          <label
            htmlFor="signup-password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiLockClosed className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="signup-password"
              name="password"
              type="password"
              required
              className="appearance-none block w-full pl-10 pr-3 py-2 border border-amber-200 rounded focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none"
              placeholder="••••••••"
            />
          </div>
        </div>

        {/* Terms Checkbox */}
        <div className="flex items-center">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            required
            className="h-4 w-4 text-amber-800 focus:ring-amber-500 border-gray-300 rounded"
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
            I agree to the{" "}
            <a href="#" className="text-amber-800 hover:text-amber-600">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-amber-800 hover:text-amber-600">
              Privacy Policy
            </a>
          </label>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border-2 border-amber-800 rounded text-sm font-medium text-white bg-amber-800 hover:bg-amber-700 transition-colors cursor-pointer"
          >
            Create account
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
