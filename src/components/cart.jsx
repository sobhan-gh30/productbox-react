export default function Cart({title, price, favorite, summery, color}) {
    return (

        <div className="bg-white p-5 rounded-md shadow-sm border border-gray-200">
            <img src={"/img/watch.png"} alt=""/>
            <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
            <p className="text-sm text-gray-500 mt-2">
                {summery}
            </p>
            <div className="mt-4 flex items-center justify-between">
                <span className="text-gray-800 font-bold text-base">{price} تومان</span>
                <span className={"flex items-center justify-center gap-2"}>
                    <button className="w-7 h-7 text-sm rounded-full border border-gray-300 hover:bg-gray-200 transition outline-0">
                        {favorite?"❤️":"🤍"}
                    </button>
                    <span className={`inline-block w-7 h-7 rounded-full border border-gray-300`} style={{background:color }} ></span>
                </span>
            </div>
            <div className="mt-4 flex items-center justify-between">
                <a href="#" className="hover:underline text-zinc-400 hover:text-zinc-600">بیشتر...</a>
            </div>
        </div>

    )
}