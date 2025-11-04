import { Link } from "react-router-dom";

export default function NavBare(){
return(
     <nav className=" text-black font-semibold">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
        <span className="text-4xl text-violet-600">E</span>
          -Market
        </Link>

        {/* Menu Links */}
        {/* <div className="flex space-x-6">
          <Link to="/" className="hover:text-violet-200 transition">
            Home
          </Link>
          <Link to="/products" >
            Products
          </Link>
          <Link to="/about">
            About
          </Link>
          <Link to="/contact">
            Contact
          </Link>
        </div> */}

        {/* Auth Buttons */}
        <div className="space-x-3">
          <Link
            to="/login"
            className="bg-white text-violet-600 bg-violet-100 px-3 py-1 rounded-lg font-medium hover:bg-violet-100 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="border border-white bg-violet-500 px-3 py-1 rounded-lg font-medium hover:bg-violet-500 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>   
);
}