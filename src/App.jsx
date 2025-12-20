import Cart from "./components/cart.jsx";
import React, {useEffect, useState} from "react";
import ButtonNavigation from "./components/buttonNavigation.jsx";
import BasketCart from "./components/basketCart.jsx";
import Loader from "./components/Loader.jsx";
import swal from 'sweetalert';
import SearchSection from "./components/searchSection.jsx";


function App() {


    // API related stated
    let [producteList , setProductList]= useState([]);
    const [loading , setLoading] = useState(false);
    const [error , setError] = useState(null);

    //search related states
    const [product , setProduct] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    // cart related states
    const [cartItems, setCartItems] = useState([]);
    //BasketCartShown
    const [IsBasketHidden , setIsBasketHidden] = useState(true);

    //filter states
    const [filter , setFilter] = useState("all");

    //API
    useEffect( () => {
        async function getApi(){
            let retry = 3
            let attempt = 1

            for (attempt; attempt <= retry; attempt++) {
                try {
                    setLoading(true);
                    const response = await fetch('https://fakestoreapi.com/products');

                    if (!response.ok) {
                        throw new Error(`HTTP ${response.status}`);
                    }

                    const data = await response.json();
                    setProductList(data.map(item => ({ ...item, favorite: false })));
                    return;
                } catch (error) {
                    if (attempt === retry) {
                        setError(error);
                        throw error;
                    }
                    let backoffTime = 2**(attempt-1)*1000;
                    await new Promise(resolve => setTimeout(resolve, backoffTime));
                } finally {
                    setLoading(false);
                    setProduct(producteList)
                }
            }
        }
        getApi();
    },[])

    // Error handling
    useEffect(() => {
        if (error) {
            swal("ERROR", error.message, "error");
        }
    }, [error]);


    //likes and filter related functions
    function filterChange() {
        if (filter === "all") {
            setFilter("fav");
        }else{
            setFilter("all");
        }
    }
    function likeItem(id) {
        setProduct(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, favorite: !item.favorite }
                    : item
            )
        );
    }

    //Basket related functions
    function addToBasket(item){
        setCartItems(prev => [...prev, item])
    }
    function EmptyBasket(){
        setCartItems([]);
    }
    function basketShowHandler(){
        setIsBasketHidden(prev => !prev);
    }


    //searched related functions
    function searchHandler(item){
        setSearchValue(item);
        if(item) {
            setProduct(producteList.filter(w => w.title.toLowerCase().includes(item.toLowerCase())));
        } else {
            emptySearchInput();
        }
    }
    function emptySearchInput(){
        setSearchValue("");
        setProduct(producteList)
    }




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
                hidden={IsBasketHidden}
                basketShowHandler={basketShowHandler}
                cartItems={cartItems}
                EmptyBasket={EmptyBasket}
            />

            <ButtonNavigation
                filterChange={filterChange}
                basketShowHandler={basketShowHandler}
                IsBasketHidden={IsBasketHidden}
                filter={filter}
            />
        </>

    )
}

export default App
