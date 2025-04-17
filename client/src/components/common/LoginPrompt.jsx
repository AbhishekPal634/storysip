import React from "react";
import { Link } from "react-router-dom";

function LoginPrompt({ message }) {
  return (
    <div className="text-center py-4">
      <p className="text-gray-600">
        Please{" "}
        <Link to="/auth" className="text-amber-800 hover:underline">
          login
        </Link>{" "}
        {message}
      </p>
    </div>
  );
}

export default LoginPrompt;
