import { Link } from "react-router-dom";
import MainNav from "./MainNav.jsx";
import MobileNav from "./MobileNav.jsx";

const Header = () => {
  return (
    <div className="border-b-2 py-6  border-b-purple-600">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-purple-600 font-poppins"
        >
          Professional Services
        </Link>
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
