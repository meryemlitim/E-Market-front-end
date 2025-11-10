import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProductList() { 
    const [products, setProducts] = useState([]);
      const {user} = useAuth();
    useEffect(() => {
        const fetchProducts = async () => {
            try{
                const res = await api.get("/products/");
                setProducts(res.data.data);

                console.log("products", res.data.data);    
            }catch(err){
                console.log("error fetching products", err);
            }
        }
        fetchProducts();

    }, []);
    if(products.length === 0){
        return(
              <>
        <div className="flex justify-center mt-40 text-2xl font-bold">
            <p className="">Loading...</p>
        </div>
        </>
        );
    }
  return (
    <div className="min-h-82 flex items-center justify-center bg-gray-100 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {products.map((item) => (
            <Link
            key={item._id}
            to={user? `/productDetails/${item._id}` : "/login"}
            >
            <div
                key={item}
                className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col items-center"
            >
                <img
                // src="https://korekawaii.com/cdn/shop/files/Kawaii-Sushi-Cats-T-Shirt.webp?v=1728056538"
                 src={item.images.length !== 0 ? `http://localhost:3000${item.images[0]}` : "https://cdn-icons-png.flaticon.com/512/73/73775.png"}
                //   src={item.images[0]} 
                alt="product"
                
                className="w-full h-48 object-cover"
                />
                <h1 className="text-sm font-bold mt-3  text-black-800">
                {item.title}
                </h1>
                <button className="flex gap-2 items-center text-sm/8 text-violet-500 font-bold border-2 rounded-full px-4 mb-4 mt-4 border-violet-500 hover:text-white hover:bg-violet-500 transition">
                <ShoppingCart size={20} className=" text-black-600" />
                $
                {item.prix}
                </button>
            </div>
            </Link>
        ))}
      </div>
    </div>
  );
}
