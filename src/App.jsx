// App.jsx or wherever your routes are
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Navbar/Navbar";
import ScrollToTop from "./components/Navbar/ScrollTop";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import ProductPage from "./pages/Projects/ProjectPage";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<ProductPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
