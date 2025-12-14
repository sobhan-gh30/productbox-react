import ProductCartBasket from "./productCartBasket.jsx";

export default function BasketCart({hidden, basketShowHandler, cartItems}){

    // فرمت قیمت به صورت تومان
    const formatPrice = (price) => {
        return new Intl.NumberFormat('fa-IR').format(price) + " تومان";
    };




    return (
        <>
            {/* پس‌زمینه تاریک */}
            <div className={`${hidden?"hidden":"fixed"} inset-0 opacity-80 bg-black z-50 transition-opacity duration-300`}/>

            {/* مودال */}
            <div className={`${hidden?"hidden":"fixed"} inset-0 z-50 flex items-center justify-center p-4 mb-20`}>
                <div
                    className="bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col transform transition-all duration-300 scale-100"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* هدر مودال */}
                    <div className="bg-gradient-to-r from-zinc-600 to-gray-700 text-white p-6">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                <div>
                                    <h2 className="text-2xl font-bold">سبد خرید شما</h2>
                                    <p className="text-zinc-100 text-sm mt-1">{cartItems.length} کالا در سبد خرید</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                <span className="bg-white text-zinc-700 font-bold px-4 py-1 rounded-full">
                  {formatPrice()}
                </span>
                                <button
                                    onClick={basketShowHandler}
                                    className="text-gray-600 hover:text-gray-400 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200"
                                    aria-label="بستن مودال"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* محتوای مودال */}
                    <div className="flex-1 overflow-y-auto p-6">
                        {cartItems.length === 0 ? (
                            <div className="text-center py-12">
                                <div className="inline-block p-6 bg-zinc-50 rounded-full mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">سبد خرید شما خالی است</h3>
                                <p className="text-gray-600 mb-8 max-w-md mx-auto">هنوز محصولی به سبد خرید خود اضافه نکرده‌اید. می‌توانید از محصولات متنوع ساعت‌های ما دیدن کنید.</p>
                            </div>
                        ) : (
                            <>
                                {/* آمار سبد خرید */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                    <div className="bg-gradient-to-r from-zinc-50 to-indigo-50 p-5 rounded-xl border border-zinc-100">
                                        <div className="flex items-center">
                                            <div className="bg-zinc-100 p-3 rounded-lg ml-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-600">جمع کل</p>
                                                <p className="text-xl font-bold text-gray-900">{formatPrice()}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* لیست محصولات */}
                                <div className="space-y-6 mb-8">
                                    <h3 className="text-lg font-bold text-gray-800 border-b pb-3">لیست کالاهای انتخاب شده</h3>

                                    {cartItems.map(item => (
                                        <ProductCartBasket key={item.id} {...item} />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    {/* فوتر مودال */}
                    <div className="bg-gray-50 border-t border-gray-200 p-6">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="mb-4 md:mb-0">
                                <div className="text-2xl font-bold text-gray-900 mb-1">{formatPrice()}</div>
                                <p className="text-gray-600 text-sm">مبلغ قابل پرداخت</p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                                <div className="flex gap-3 order-1 sm:order-2">
                                    {cartItems.length > 0 && (
                                        <button
                                            // onClick={clearCart}
                                            className="bg-red-50 text-red-700 hover:bg-red-100 font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                            خالی کردن سبد
                                        </button>
                                    )}

                                    <button
                                        onClick={basketShowHandler}
                                        className="bg-gray-200 text-gray-800 hover:bg-gray-300 font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center"
                                    >
                                        ادامه خرید
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};