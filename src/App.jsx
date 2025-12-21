import Home from "./pages/Home.jsx";
import ButtonNavigation from "./components/buttonNavigation.jsx";
import {useState} from "react";
import {Route, Routes} from "react-router";
import Product from "./pages/product.jsx";



function App() {


    // -------------------- Cart States --------------------
    const [cartItems, setCartItems] = useState([]);
    const [isBasketHidden, setIsBasketHidden] = useState(true);

    // -------------------- Filter States --------------------
    const [filter, setFilter] = useState("all");

    function basketShowHandler() {setIsBasketHidden(prev => !prev);}

    // -------------------- Product Functions --------------------
    function filterChange() {setFilter(prev => prev === "all" ? "fav" : "all")}

    // -------------------- Cart Functions --------------------
    function addToBasket(item) {setCartItems(prev => [...prev, item]);}
    function emptyBasket() {setCartItems([]);}
    return (
        <>
            <Routes>
                <Route path="/" element={
                    <Home
                        basketShowHandler={basketShowHandler}
                        isBasketHidden={isBasketHidden}
                        filter={filter}
                        addToBasket={addToBasket}
                        emptyBasket={emptyBasket}
                        cartItems={cartItems} />
                }/>
                <Route path="/products/:id" element={
                    <Product
                        addToBasket={addToBasket}
                        emptyBasket={emptyBasket}
                        cartItems={cartItems} />}/>
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
