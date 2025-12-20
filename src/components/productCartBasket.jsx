import {useEffect} from "react";

export default function ProductCartBasket({title, price, color,image}){
    // -------------------- Basket Effects --------------------
    useEffect(() => {

    }, []);


    // فرمت قیمت به صورت تومان
    const formatPrice = (price) => {
        return new Intl.NumberFormat('fa-IR').format(price) + " تومان";
    };

    return (
        <div className="bg-gray-50 rounded-xl p-5 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-200">
            <div className="flex flex-col md:flex-row">
                {/* تصویر محصول */}
                <div className="md:w-1/4 mb-4 md:mb-0  rounded-xl border border-gray-300 flex justify-center">
                    <div className="relative">
                        <img
                            src={image}
                            alt={title}
                            className="w-fit h-48 md:h-40 object-cover"
                        />
                    </div>
                </div>

                {/* اطلاعات محصول */}
                <div className="md:w-3/4 md:pr-6">
                    <div className="flex justify-between items-start">
                        <div>
                            <div className="flex items-center mb-2">
                                <h4 className="font-bold text-xl text-gray-900">{title}</h4>
                            </div>

                            {/* ویژگی‌های محصول */}
                            <div className="mb-4">
                                {/*<div className="flex flex-wrap gap-2">*/}
                                {/*    {item.features.map((feature, index) => (*/}
                                {/*        <span key={index} className="text-xs bg-zinc-100 text-zinc-800 px-3 py-1.5 rounded-full">{feature}</span>*/}
                                {/*    ))}*/}
                                {/*</div>*/}
                            </div>
                        </div>

                        {/* دکمه حذف */}
                        <button
                            // onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 p-2 rounded-full transition-all duration-200"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    </div>

                    {/* کنترل تعداد و قیمت */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-6">
                        {/* قیمت */}
                        <div className="text-left">
                            <div>
                                <div className="flex items-center mt-1">
                                    <p className="text-lg text-gray-800 font-bold">{formatPrice(price*10000)}</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">قیمت برای هر عدد</p>
                        </div>
                        <div>
                                <span className="w-6 h-6 inline-block rounded-full border border-gray-300" style={{ backgroundColor: color }}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}