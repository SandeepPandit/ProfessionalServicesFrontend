import { Link } from "react-router-dom";
import { useAuth } from "@/Authorization/useAuth.jsx";
import UsernameMenu from "./UsernameMenu.jsx";

const MainNav = () => {
  const { isLoggedIn } = useAuth();
  return (
    <span className="flex space-x-4 items-center">
      <Link to="/" className="font-bold hover:text-purple-600">
        {" "}
        Home{" "}
      </Link>
      <Link to="/about" className="font-bold hover:text-purple-600">
        {" "}
        About{" "}
      </Link>
      <Link to="/service" className="font-bold hover:text-purple-600">
        {" "}
        Services{" "}
      </Link>
      <Link to="/contact" className="font-bold hover:text-purple-600">
        {" "}
        Contact{" "}
      </Link>
      {isLoggedIn ? (
        <>
          {" "}
          <UsernameMenu />
        </>
      ) : (
        <>
          <Link to="/register" className="font-bold hover:text-purple-600">
            {" "}
            Register{" "}
          </Link>
          <Link to="/login" className="font-bold hover:text-purple-600">
            {" "}
            Login{" "}
          </Link>
        </>
      )}
    </span>
  );
};

export default MainNav;
