import Navbar from "./components/Navbar";
import Social from "./components/Social";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Location from "./pages/Location";
import Booking from "./pages/Booking";
import FeedBack from "./pages/FeedBack";

import { Route, Routes } from "react-router-dom";

function Layout() {
  return (
    <div className="w-full h-screen">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/locations" element={<Location />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<FeedBack />} />
      </Routes>
      <Navbar />
      <Social />
      <Footer />
    </div>
  );
}

export default Layout;
