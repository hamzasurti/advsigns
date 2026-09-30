import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import GovernmentServices from "./pages/GovernmentServices";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";
import NotFound from "./pages/NotFound";
import Street from "./pages/signs/Street";
import Building from "./pages/signs/Building";
import Ada from "./pages/signs/Ada";
import Lobby from "./pages/signs/Lobby";
import VehicleWraps from "./pages/signs/VehicleWraps";
import WallGraphics from "./pages/signs/WallGraphics";
import LaserEngraving from "./pages/signs/LaserEngraving";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div key={location.pathname} className="page-enter">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/public-works" element={<GovernmentServices />} />
        <Route path="/government-services" element={<Navigate to="/public-works" replace />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/signs/street" element={<Street />} />
        <Route path="/signs/construction" element={<Navigate to="/signs/street" replace />} />
        <Route path="/signs/building" element={<Building />} />
        <Route path="/signs/ada" element={<Ada />} />
        <Route path="/signs/lobby" element={<Lobby />} />
        <Route path="/signs/vehicle-wraps" element={<VehicleWraps />} />
        <Route path="/signs/wall-graphics" element={<WallGraphics />} />
        <Route path="/signs/laser-engraving" element={<LaserEngraving />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <a href="#main" className="btn btn-mark sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60]">
        Skip to content
      </a>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <ScrollToTop />
        <main id="main" tabIndex={-1} className="flex-grow outline-none">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
