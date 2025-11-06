import { ShoppingCart } from "lucide-react";
export default function ProductDetails() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-2xl flex flex-col md:flex-row gap-8 p-6 max-w-5xl w-full">
        {/* Left: Product Images */}
        <div className="flex flex-col items-center w-full md:w-1/2">
          {/* Main Image */}
          <img
            src="https://korekawaii.com/cdn/shop/files/Kawaii-Sushi-Cats-T-Shirt.webp?v=1728056538"
            alt="product"
            className="w-full h-96 object-cover rounded-xl mb-4"
          />

          {/* Thumbnails */}
          <div className="flex gap-3 justify-center">
            {Array(3)
              .fill(
                "https://korekawaii.com/cdn/shop/files/Kawaii-Sushi-Cats-T-Shirt.webp?v=1728056538"
              )
              .map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`thumbnail-${index}`}
                  className="w-20 h-20 object-cover rounded-lg border-2 border-gray-200 hover:border-violet-500 cursor-pointer transition"
                />
              ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col justify-between w-full md:w-1/2 space-y-4">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">
              Kawaii T-shirt
            </h1>
            <h2 className="text-yellow-500 font-medium mb-3">★★★★☆ (4.5)</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A premium handcrafted watch designed with elegance and precision.
              Perfect for any occasion.
            </p>
            <h2 className="text-2xl font-bold text-violet-600">$199.99</h2>
            {/* Quantity Selector */}
            <div className="flex items-center gap-3 mt-8">
              <span className="font-medium text-gray-700">Quantité:</span>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button className="px-3 py-1 text-lg text-violet-500 hover:bg-violet-100 transition">
                  -
                </button>
                <span className="px-4 py-1 text-gray-800">1</span>
                <button className="px-3 py-1 text-lg text-violet-500 hover:bg-violet-100 transition">
                  +
                </button>
              </div>
            </div>
            {/* Price and Add to Cart */}
            <div className="flex items-center justify-between mt-10">
              <button className=" flex gap-4 bg-violet-500 hover:bg-violet-600 text-white font-medium px-6 py-2 rounded-lg transition">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
