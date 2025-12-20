export default function SearchSection() {

    return (


        <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-300">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://github.com/sobhan-gh30" target={"_blank"} className="flex items-center justify-center font-bold text-lg text-blue-900 hover:scale-105 transition">
                    Sobhan-gh30
                </a>
                <div className="flex items-center md:order-2">
                    <form className="form relative w-80">
                        <button className="absolute left-2 -translate-y-1/2 top-1/2 p-1">
                            <svg width="17" height="16" fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                aria-labelledby="search"
                                className="w-5 h-5 text-gray-700"
                            >
                                <path
                                    d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                                    stroke="currentColor"
                                    strokeWidth="1.333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </svg>
                        </button>
                        <input
                            className="input rounded-full w-full h-10 px-10 border border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300"
                            placeholder="Search..."
                            required=""
                            type="text"
                        />
                        <button type="reset" className="absolute right-3 -translate-y-1/2 top-1/2 p-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 text-gray-700"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </button>
                    </form>


                </div>
            </div>
        </nav>

    )

}