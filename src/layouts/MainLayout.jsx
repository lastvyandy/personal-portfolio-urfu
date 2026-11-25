import { Outlet } from "react-router";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="page-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
