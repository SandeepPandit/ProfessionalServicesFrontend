import { useAuth } from "@/Authorization/useAuth";
import AdminMainNav from "@/components/AdminMainNav";
import AdminMobileNav from "@/components/AdminMobileNav";
import Footer from "@/components/Footer";
import PropTypes from "prop-types";
import { Link, Navigate } from "react-router-dom";

function AdminLayout({ newDiv }) {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="border-b-2 py-6  border-b-purple-600">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            to="/admin"
            className="text-3xl font-bold tracking-tight text-purple-600 font-poppins"
          >
            Administrator
          </Link>
          <div className="md:hidden">
            <AdminMobileNav />
          </div>
          <div className="hidden md:block">
            <AdminMainNav />
          </div>
        </div>
      </div>

      <div className="container mx-auto flex-1 py-10"> {newDiv}</div>

      <Footer />
    </div>
  );
}

AdminLayout.propTypes = {
  newDiv: PropTypes.elementType.isRequired,
};

export default AdminLayout;
