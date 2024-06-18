import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/HomePage";
import { About } from "./pages/AboutPage";
import { Contact } from "./pages/ContactPage";
import { Service } from "./pages/ServicePage";
import { Register } from "./pages/RegisterPage";
import { Login } from "./pages/LoginPage";
import { Error } from "./pages/ErrorPage";
import { Logout } from "./components/Logout";
import { AdminUsers } from "./pages/AdminUsersPage";
import { AdminContacts } from "./pages/AdminContactsPage";
import { AdminUpdate } from "./pages/AdminUpdatePage";
import Layout from "./layouts/Layout";
import AdminLayout from "./layouts/AdminLayout";
import { Admin } from "./pages/AdminPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout newDiv={<Home />} />} />
        <Route path="/about" element={<Layout newDiv={<About />} />} />
        <Route path="/contact" element={<Layout newDiv={<Contact />} />} />
        <Route path="/service" element={<Layout newDiv={<Service />} />} />
        <Route path="/register" element={<Layout newDiv={<Register />} />} />
        <Route path="/login" element={<Layout newDiv={<Login />} />} />
        <Route path="/logout" element={<Layout newDiv={<Logout />} />} />
        <Route path="*" element={<Error />} />
        <Route path="/admin" element={<AdminLayout newDiv={<Admin />} />} />
        <Route
          path="/admin/users"
          element={<AdminLayout newDiv={<AdminUsers />} />}
        />
        <Route
          path="/admin/contacts"
          element={<AdminLayout newDiv={<AdminContacts />} />}
        />
        <Route
          path="/admin/users/:id/edit"
          element={<AdminLayout newDiv={<AdminUpdate />} />}
        />
      </Routes>
    </>
  );
};

export default App;
