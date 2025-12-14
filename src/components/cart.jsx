export default function Cart({id, title, price, favorite, summery, color, onFav }) {
    return (
        <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md transition">

            <img
                src="/img/watch.png"
                alt={title}
                className="w-full h-40 object-contain mb-4"
            />

            <h2 className="text-base font-medium text-gray-900">
                {title}
            </h2>

            <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                {summery}
            </p>

            <div className="mt-4 flex items-center justify-between">
        <span className="text-sm font-semibold text-gray-800">
          {price} تومان
        </span>

                <div className="flex items-center gap-2">
                    <button
                        onClick={() =>onFav(id)}
                        className="w-8 h-8 rounded-full border border-gray-300 text-sm
                       hover:bg-gray-100 transition flex items-center justify-center"
                    >
                        {favorite ? "❤️" : "🤍"}
                    </button>

                    <span
                        className="w-6 h-6 rounded-full border border-gray-300"
                        style={{ backgroundColor: color }}
                    />
                </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
                <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-gray-600 transition"
                >
                    بیشتر...
                </a>

                <button
                    className="text-sm font-medium text-gray-700
                     hover:text-gray-900 transition"
                >
                    افزودن به سبد
                </button>
            </div>
        </div>
    );
}
