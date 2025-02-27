import PropTypes from 'prop-types';  // Import PropTypes for validation
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';  // Check if user is logged in

  return isLoggedIn ? children : <Navigate to="/login-session" replace />;  // Redirect to login if not logged in
};

// Add prop validation for children
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired, // children should be of type node (react elements)
};

export default PrivateRoute;
