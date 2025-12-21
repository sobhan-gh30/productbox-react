import Home from "./pages/Home.jsx";
import ButtonNavigation from "./components/buttonNavigation.jsx";
import {useState} from "react";
import {Route, Routes} from "react-router";
import Product from "./pages/product.jsx";



function App() {


    const [isBasketHidden, setIsBasketHidden] = useState(true);

    // -------------------- Filter States --------------------
    const [filter, setFilter] = useState("all");
    function basketShowHandler() {setIsBasketHidden(prev => !prev);}
    // -------------------- Product Functions --------------------
    function filterChange() {setFilter(prev => prev === "all" ? "fav" : "all")}

    return (
        <>
            <Routes>
                <Route path="/" element={
                    <Home basketShowHandler={basketShowHandler} isBasketHidden={isBasketHidden} filter={filter}/>
                }/>
                <Route path="/products/:id" element={<Product/>}/>
            </Routes>

            <ButtonNavigation
                filterChange={filterChange}
                basketShowHandler={basketShowHandler}
                isBasketHidden={isBasketHidden}
                filter={filter}
            />
        </>

    )
}

export default App
