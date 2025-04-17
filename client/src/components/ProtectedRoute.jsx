import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import authService from "../api/services/authService";

const ProtectedRoute = ({ children, requireAdmin = false }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await authService.getUser();

        if (!user) {
          setIsAuthorized(false);
        } else if (requireAdmin && user.role !== "admin") {
          setIsAuthorized(false);
        } else {
          setIsAuthorized(true);
        }
      } catch (error) {
        setIsAuthorized(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [requireAdmin]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-800"></div>
      </div>
    );
  }

  if (!isAuthorized) {
    return <Navigate to={requireAdmin ? "/" : "/auth"} replace />;
  }

  return children;
};

export default ProtectedRoute;
