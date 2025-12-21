export default function Product({ title, price, description, category, image }){

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">

                {/* Image Section */}
                <div className="bg-gray-50 flex items-center justify-center p-6">
                    <img
                        src={image}
                        alt={title}
                        className="max-h-96 object-contain"
                    />
                </div>

                {/* Info Section */}
                <div className="p-6 flex flex-col gap-4">
          <span className="text-sm uppercase tracking-wide text-gray-500">
            {category}
          </span>

                    <h1 className="text-2xl font-bold text-gray-900">
                        {title}
                    </h1>

                    <p className="text-gray-600 leading-relaxed">
                        {description}
                    </p>

                    <div className="mt-auto">
                        <div className="flex items-center justify-between">
              <span className="text-2xl font-semibold text-green-600">
                ${price}
              </span>

                            <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}