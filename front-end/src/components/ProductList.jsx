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
                src="https://images.unsplash.com/photo-1670177257750-9b47927f68eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaCUyMHByb2R1Y3R8ZW58MXx8fHwxNzYyMjg4MjY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="product"
                className="w-full h-48 object-cover"
              />
              <h1 className="text-lg font-semibold mt-3 mb-4 text-gray-800">
                Product Title
              </h1>
            </div>
          ))}
        </div>
      </div>
    );
}