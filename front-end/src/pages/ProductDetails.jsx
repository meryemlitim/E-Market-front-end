import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import NavBare from "../components/NavBare";
import toast from "react-hot-toast";
export default function ProductDetails() {
  const [image, setImage] = useState("");
  const [count, setCount] = useState(1);
  function changePic(img) {
    setImage(img);
  }
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const fetchProducDetails = async () => {
      try {
        const res = await api.get(`/products/${id}`);
        setProduct(res.data.data);
      } catch (err) {
        console.log("error fetching product's details ", err);
      }
    };
    fetchProducDetails();
  }, [id]);

  if (!product)
    return (
      <>
        <div className="flex justify-center mt-40 text-2xl font-bold">
          <p className="">Loading...</p>
        </div>
      </>
    );
  return (
    <>
      <NavBare />

      <div className="min-h- bg-gray-100 flex items-center justify-center p-6">
        <div className="bg-white shadow-md rounded-2xl flex flex-col md:flex-row gap-8 p-6 max-w-5xl w-full">
          {/* Left: Product Images */}
          <div className="flex flex-col items-center w-full md:w-1/2">
            {/* Main Image */}
            <img
              src={
                image === ""
                  ? `http://localhost:3000${product.images[0]}`
                  : `http://localhost:3000${image}`
              }
              alt="product"
              className="w-full h-96 object-cover rounded-xl mb-4"
            />

            {/* Thumbnails */}
            <div className="flex gap-3 justify-center">
              {product.images.slice(0, 3).map((img, index) => (
                <img
                  key={index}
                  src={`http://localhost:3000${img}`}
                  alt={`thumbnail-${index}`}
                  className={`w-20 h-20 object-cover rounded-lg border-2 border-gray-200 hover: cursor-pointer transition ${
                    image === img ? "border-violet-500" : "border-none"
                  }`}
                  onClick={() => changePic(img)}
                />
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col justify-between w-full md:w-1/2 space-y-4">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800 mb-2">
                {product.title}
              </h1>
              <h2 className="text-yellow-500 font-medium mb-3">★★★★☆ (4.5)</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {product.description}
              </p>
              <h2 className="text-2xl font-bold text-violet-600">
                ${product.prix}
              </h2>
              {/* Quantity Selector */}
              <div className="flex items-center gap-3 mt-8">
                <span className="font-medium text-gray-700">Quantité:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() =>
                      setCount((prev) => (prev > 1 ? prev - 1 : 1))
                    }
                    className="px-3 py-1 text-lg text-violet-500 hover:bg-violet-100 transition"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 text-gray-800">{count}</span>
                  <button
                    onClick={() => setCount((prev) => prev + 1)}
                    className="px-3 py-1 text-lg text-violet-500 hover:bg-violet-100 transition"
                  >
                    +
                  </button>
                </div>
              </div>
              {/* Price and Add to Cart */}
              <div className="flex items-center justify-between mt-10">
                <button
                  onClick={() => {
                    toast.success("Product added successfully to your cart!");
                  }}
                  className=" flex gap-4 bg-violet-500 hover:bg-violet-600 text-white font-medium px-6 py-2 rounded-lg transition"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
