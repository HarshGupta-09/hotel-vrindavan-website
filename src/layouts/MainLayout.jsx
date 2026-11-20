
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingCallButton from "../components/FloatingCallButton";
function MainLayout() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
      <FloatingCallButton/>
    </>
  );
}

export default MainLayout;
