import { Link } from "react-router-dom";
import { useAuth } from "@/Authorization/useAuth";

const MobileNavLinks = () => {
  const { isLoggedIn, user } = useAuth();
  return (
    <>
      <Link
        to="/"
        className="font-poppins flex bg-white items-center font-bold hover:text-purple-600"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="font-poppins flex bg-white items-center font-bold hover:text-purple-600"
      >
        About
      </Link>
      <Link
        to="/service"
        className="font-poppins flex bg-white items-center font-bold hover:text-purple-600"
      >
        Services
      </Link>
      <Link
        to="/contact"
        className="flex bg-white items-center font-bold hover:text-purple-600 font-poppins"
      >
        Contact
      </Link>
      {isLoggedIn ? (
        <>
          {user.isAdmin ? (
            <>
              <Link to="/admin" className="font-bold hover:text-purple-600">
                Admin
              </Link>
              <Link to="/logout" className="font-bold hover:text-purple-600">
                Log Out
              </Link>
            </>
          ) : (
            <Link to="/logout" className="font-bold hover:text-purple-600">
              Log Out
            </Link>
          )}
        </>
      ) : (
        <>
          <Link to="/register" className="font-bold hover:text-purple-600">
            Register
          </Link>
          <Link to="/login" className="font-bold hover:text-purple-600">
            Login
          </Link>
        </>
      )}
    </>
  );
};

export default MobileNavLinks;
