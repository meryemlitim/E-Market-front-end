import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Register from "./pages/register.jsx";
import Login from "./pages/login.jsx";
import NotFount from "./pages/notFound.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFount />} />
      </Routes>
         <Toaster position="top-right" />                                           
    </Router>
  );
}

export default App;
