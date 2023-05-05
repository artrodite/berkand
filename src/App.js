import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Product from "./pages/Product";

function App() {
  return (
    <Router className="App font-[Roboto] bg-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:group/:types" element={<Product />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
