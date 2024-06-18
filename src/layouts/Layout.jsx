import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PropTypes from "prop-types";

function Layout({ newDiv }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="container mx-auto flex-1 py-10">{newDiv}</div>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  newDiv: PropTypes.elementType.isRequired,
};

export default Layout;
