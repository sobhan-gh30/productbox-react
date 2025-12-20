export default function ButtonNavigation({filterChange , filter , basketShowHandler, isBasketHidden}) {
    return (


        <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-2 border-gray-200">
            <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">

                {/*GitHub page*/}
                <a href="https://github.com/sobhan-gh30" target={"_blank"}
                        className="inline-flex flex-col items-center justify-center px-5 hover:bg-zinc-100">
                    <svg className="bi bi-github w-6 h-6 mb-1 text-body group-hover:text-fg-brand"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                        <path
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                    </svg>
                    <span className="text-sm text-body group-hover:text-fg-brand">Github</span>
                </a>


                {/*Liked*/}
                <button onClick={filterChange} type="button"
                        className="inline-flex flex-col items-center justify-center px-5 hover:bg-zinc-100">
                    {

                        filter === "all" ?
                            <svg
                                className="bi bi-star w-6 h-6 mb-1 text-body group-hover:text-fg-brand"
                                viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor">
                                <path
                                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                            </svg> : <svg
                                className="bi bi-star-fill w-6 h-6 mb-1 text-body group-hover:text-fg-brand"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                    }
                    <span className="text-sm text-body group-hover:text-fg-brand">favorite</span>
                </button>


                {/*Wallet*/}
                <button type="button"
                        onClick={basketShowHandler}
                        className={`inline-flex flex-col items-center justify-center px-5 hover:bg-zinc-100 ${isBasketHidden?"bg-white":"bg-zinc-100"}`}>
                    <svg className="w-6 h-6 mb-1 text-body group-hover:text-fg-brand" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M17 8H5m12 0a1 1 0 0 1 1 1v2.6M17 8l-4-4M5 8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.6M5 8l4-4 4 4m6 4h-4a2 2 0 1 0 0 4h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z"/>
                    </svg>
                    <span className="text-sm text-body group-hover:text-fg-brand">Wallet</span>
                </button>
            </div>
        </div>

    )
}