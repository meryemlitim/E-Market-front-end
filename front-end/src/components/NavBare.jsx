import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { LogOut, Package, ShoppingCart, User, Home } from "lucide-react";
import { useState } from "react";

export default function NavBare() {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const  handleMenu = async() => {
    setMenuOpen(!menuOpen);
  }
  return (
    <nav className=" text-black font-semibold">
      <div className="w-full px-10 py-3 flex justify-between align-center items-center">
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
              <div className="flex items-center ">

                  <Link
                    to="#"
                    className=" flex items-center gap-2 bg-white text-black-600 bg-violet-100 px-3 py-1 rounded-lg font-medium hover:bg-violet-100 transition"
                  >
                    <ShoppingCart
                      size={20}
                      className=" text-black-600"
                    />
                    Cart
                  </Link>
                  <Link
                    to="#"
                    className="flex items-center gap-2  text-black-600 px-3 py-1 rounded-lg font-medium hover:bg-violet-200 transition"
                  >
                    <Package size={20} className="text-black-600" /> Orders
                  </Link>
              </div>
                {/* <Link
                  onClick={logout}
                  className="text-white border border-white bg-violet-500 px-3 py-1 rounded-lg font-medium hover:bg-violet-500 transition"
                >
                  Logout
                </Link> */}
                <img onClick={handleMenu} className="w-10 h-10 rounded-full border-2 border-violet-500" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi77IkqCITFKM99gn-FFqZULqln3msAHyOqw&s" alt="Rounded avatar"/>
                {menuOpen && (
                     <div className="text-xs absolute right-6 top-10 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-50">
                    <Link
                      to="/"
                      className="flex gap-2  px-4 py-2 text-gray-700 hover:bg-violet-100"
                      onClick={() => setMenuOpen(false)}
                    >
                      <Home size={14} />
                      
                      Home
                    </Link>
                    <hr className="border-gray-200" />
                    <button
                      onClick={() => { logout(); setMenuOpen(false);}}
                      className=" flex gap-2 w-full text-left px-4 py-2 text-gray-700 hover:bg-violet-100"
                    >
                       <LogOut size={14} />
                      Logout
                    </button>
                  </div>
                )}

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
