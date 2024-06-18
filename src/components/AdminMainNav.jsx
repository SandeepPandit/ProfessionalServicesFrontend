import { Link } from "react-router-dom";

const AdminMainNav = () => {
  return (
    <span className="flex space-x-4 items-center">
      <Link to="/admin/users" className="font-bold hover:text-purple-600">
        {" "}
        Users{" "}
      </Link>
      <Link to="/admin/contacts" className="font-bold hover:text-purple-600">
        {" "}
        Messages{" "}
      </Link>
      <Link to="/" className="font-bold hover:text-purple-600">
        {" "}
        Return to Home{" "}
      </Link>
    </span>
  );
};

export default AdminMainNav;
