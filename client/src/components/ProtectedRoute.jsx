
import { Navigate } from "react-router-dom";
import { useAuth } from "../api/AuthContext";
import Loading from "../pages/Loading";

const ProtectedRoute = ({ children }) => {
   const { token, user, isLoading, isAuthenticating } = useAuth();

  if (isLoading || isAuthenticating) {
    return <Loading />;
  }

  if(!token) {
    console.log("❌ No token found, redirecting to login");
    return <Navigate to="/login" replace />;
  }

  if (token && !user) {
    console.log("⚠️ Token exists but no user data, redirecting to login");
    return <Navigate to="/login" replace />;
  }

  if (user && !user.isAdmin) {
    console.warn("⛔ User is not admin:", user);
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
