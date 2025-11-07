import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Register from "./pages/register.jsx";
import Login from "./pages/login.jsx";
import NotFount from "./pages/notFound.jsx";
import NavBare from "./components/NavBare.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
function App() {
  return (
    <Router>
      <NavBare />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productDatails" element={<ProductDetails />} />
        <Route path="*" element={<NotFount />} />
      </Routes>
    </Router>
  );
}

export default App;
