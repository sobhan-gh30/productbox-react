export default function Cart() {
    return (

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200">
            <img src={"/img/watch.png"} alt=""/>
            <h2 className="text-lg font-semibold text-gray-800">محصول شماره ۳</h2>
            <p className="text-sm text-gray-500 mt-2">
                توضیحاتی دربارهٔ این محصول خاص، شامل موارد مهم و کاربردی.
            </p>
            <div className="mt-4 flex items-center justify-between">
                <span className="text-gray-800 font-bold text-base">۴۹۰٬۰۰۰ تومان</span>
                <button
                    className="px-3 py-1.5 text-sm rounded-xl border border-gray-300 hover:bg-gray-200 transition">
                    ❤️ افزودن به علاقه‌مندی
                </button>
            </div>
        </div>

    )
}