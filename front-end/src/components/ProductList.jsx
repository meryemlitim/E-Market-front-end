import { ShoppingCart } from "lucide-react";

export default function ProductList(){
    return(
          <div className="min-h-82 flex items-center justify-center bg-gray-100 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col items-center"
            >
              <img
                src="https://korekawaii.com/cdn/shop/files/Kawaii-Sushi-Cats-T-Shirt.webp?v=1728056538"
                alt="product"
                className="w-full h-48 object-cover"
              />
              <h1 className="text-sm font-bold mt-3  text-black-800">
                Product Title
              </h1>
              <button className="flex gap-2 items-center text-sm/8 text-violet-500 font-bold border-2 rounded-full px-4 mb-4 mt-4 border-violet-500 hover:text-white hover:bg-violet-500 transition">
               <ShoppingCart
                      size={20}
                      className=" text-black-600"
                    />
              $30.90</button>
            </div>
          ))}
        </div>
      </div>
    );
}