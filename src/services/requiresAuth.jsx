import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "contexts/authContext";

export function RequiresAuth({ children }) {
  const location = useLocation();
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
}
