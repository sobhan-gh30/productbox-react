import Cart from "./components/cart.jsx";
import React, {useEffect, useState} from "react";
import ButtonNavigation from "./components/buttonNavigation.jsx";
import BasketCart from "./components/basketCart.jsx";
import Loader from "./components/Loader.jsx";
import swal from 'sweetalert';
import SearchSection from "./components/searchSection.jsx";


function App() {


    // -------------------- Product States --------------------
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // -------------------- Search States --------------------
    const [product, setProduct] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    // -------------------- Cart States --------------------
    const [cartItems, setCartItems] = useState([]);
    const [isBasketHidden, setIsBasketHidden] = useState(true);

    // -------------------- Filter States --------------------
    const [filter, setFilter] = useState("all");

    // -------------------- Product Effects --------------------
    useEffect(() => {
        async function getApi() {
            let retry = 3;
            let attempt = 1;

            for (attempt; attempt <= retry; attempt++) {
                try {
                    setLoading(true);
                    const response = await fetch('https://fakestoreapi.com/products');

                    if (!response.ok) throw new Error(`HTTP ${response.status}`);

                    const data = await response.json();
                    setProductList(data.map(item => ({ ...item, favorite: false })));
                    return;
                } catch (error) {
                    if (attempt === retry) {
                        setError(error);
                        throw error;
                    }
                    let backoffTime = 2 ** (attempt - 1) * 1000;
                    await new Promise(resolve => setTimeout(resolve, backoffTime));
                } finally {
                    setLoading(false);
                    setProduct(productList);
                }
            }
        }
        getApi();
    }, []);

    // -------------------- Error Handling --------------------
    useEffect(() => {if (error) swal("ERROR", error.message, "error");}, [error]);

    // -------------------- Search Effects --------------------
    useEffect(() => {
        if (searchValue.length) {
            setProduct(
                productList.filter(w => w.title.toLowerCase().includes(searchValue.toLowerCase()))
            );
        } else {setProduct(productList);}
    }, [searchValue, productList]);

    // -------------------- Product Functions --------------------
    function filterChange() {setFilter(prev => prev === "all" ? "fav" : "all")}
    function likeItem(id) {
        setProduct(prev =>
            prev.map(item =>
                item.id === id ? { ...item, favorite: !item.favorite } : item
            )
        );
    }

    // -------------------- Cart Functions --------------------
    function addToBasket(item) {setCartItems(prev => [...prev, item]);}
    function emptyBasket() {setCartItems([]);}
    function basketShowHandler() {setIsBasketHidden(prev => !prev);}

    // -------------------- Search Functions --------------------
    function searchHandler(item) {setSearchValue(item);}
    function emptySearchInput() {setSearchValue("");}



    // return section

    if(loading){
        return <Loader/>
    }

    return (
        <>
            <SearchSection
                searchValue={searchValue}
                searchHandler={searchHandler}
                emptySearchInput={emptySearchInput}
            />

            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-20">
                {(
                    filter === "all"
                        ? product
                        : product.filter(w => w.favorite)
                ).map(product => (
                    <Cart
                        key={product.id}
                        {...product}
                        onFav={() => likeItem(product.id)}
                        addToBasket={() => addToBasket(product)}
                        cartItems={cartItems}
                    />
                ))}
            </div>

            <BasketCart
                hidden={isBasketHidden}
                basketShowHandler={basketShowHandler}
                cartItems={cartItems}
                EmptyBasket={emptyBasket}
            />

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
