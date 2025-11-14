import { useEffect, useState } from "react";
import api from "../services/api";

export default function SearchBar() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
  const fetchCategories = async () => {
  try{
  const res = await api.get("/categories/");
  console.log("cat",res); 
  setCategories(res.data);
  console.log("cat2",res.data); 
  }catch(err){
   console.log("error fetching products", err);
  }
  }
  fetchCategories();
  },[])
  return (
    <div className="mx-auto px-4 py-3 flex flex-col gap-4 bg-gray-100">
      <form className="w-full mx-auto flex flex-col md:flex-row gap-2 items-center">
        {/* Search Input */}
        <div className="w-1/2 relative flex-1">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>

          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg 
                            bg-white focus:outline-none focus:ring-0 focus:border-gray-400"
            placeholder="Search for product..."
          />

          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-violet-500 hover:bg-violet-600 
                            focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
        {/* Min Price */}
        <input
          type="number"
          placeholder="Min Price"
          className="w-full md:w-32 p-2 border border-gray-300 rounded-lg focus:outline-none"
        />

        {/* Max Price */}
        <input
          type="number"
          placeholder="Max Price"
          className="w-full md:w-32 p-2 border border-gray-300 rounded-lg focus:outline-none"
        />
      </form>

      {/* 🏷️ Category Selector */}
      <div className="w-full overflow-x-auto flex justify-center">
        <ul className="flex space-x-3 min-w-max">
          
          {categories.map((category, index) => (
            <li key={index}>
              <input
                type="radio"
                id={`cat-${index}`}
                name="category"
                value={category.name}
                className="hidden peer"
                defaultChecked={category.name === "Home"}
              />
              <label
                htmlFor={`cat-${index}`}
                className="px-3 py-2 inline-flex items-center justify-center rounded-full
                           border border-gray-200 text-gray-600 bg-white cursor-pointer
                           whitespace-nowrap select-none transition
                           hover:bg-gray-50 peer-checked:bg-violet-600 peer-checked:text-white
                           peer-checked:border-violet-600"
              >
                {category.name}
              </label>
            </liù>
          ))}
        </ul>
      </div>
    </div>
  );
}
