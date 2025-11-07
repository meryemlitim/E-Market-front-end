import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Package, ShoppingCart } from "lucide-react";

export default function NavBare() {
  const { user, logout } = useAuth();
  return (
    <nav className=" text-black font-semibold">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          <span className="text-4xl text-violet-600">E</span>
          -Market
        </Link>

        {/* Menu Links */}
        {/* <div className="flex space-x-6 text-violet-500 ">
            <Link to="/" className="hover:text-violet-200 transition">
              Home
            </Link>
      
            <Link to="/about" className="hover:text-violet-200 transition">
              About
            </Link>
            <Link to="/contact" className="hover:text-violet-200 transition">
              Contact
            </Link>
          </div> */}

        {/* Auth Buttons */}
        <div className="space-x-3">
          {user ? (
            <>
              <div className="flex items-center gap-12">
              <div className="flex items-center gap-7">

                  <Link
                    to="/login"
                    className=" flex items-center gap-2 bg-white text-black-600 bg-violet-100 px-3 py-1 rounded-lg font-medium hover:bg-violet-100 transition"
                  >
                    <ShoppingCart
                      size={20}
                      className=" text-black-600"
                    />
                    Cart
                  </Link>
                  <Link
                    to="/orders"
                    className="flex items-center gap-2  text-black-600 px-3 py-1 rounded-lg font-medium hover:bg-violet-200 transition"
                  >
                    <Package size={20} className="text-black-600" /> Orders
                  </Link>
              </div>
                <Link
                  onClick={logout}
                  className="text-white border border-white bg-violet-500 px-3 py-1 rounded-lg font-medium hover:bg-violet-500 transition"
                >
                  Logout
                </Link>
              </div>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-white text-violet-600 bg-violet-100 px-3 py-1 rounded-lg font-medium hover:bg-violet-100 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-white border border-white bg-violet-500 px-3 py-1 rounded-lg font-medium hover:bg-violet-500 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
