import Cart from "./components/cart.jsx";
import React, {useEffect, useState} from "react";
import ButtonNavigation from "./components/buttonNavigation.jsx";
import BasketCart from "./components/basketCart.jsx";
import Loader from "./components/Loader.jsx";
import swal from 'sweetalert';
import SearchSection from "./components/searchSection.jsx";


function App() {
    // let [productes , setProductes]= useState([
    //     {
    //         id: 1,
    //         title: "ساعت مینیمال کلاسیک",
    //         price: 350000,
    //         description: "این ساعت برای کسایی ساخته شده که عاشق سادگی و تمیزی طراحی هستن. صفحه‌ی تمیز و بدون شلوغی باعث میشه توی هر نوری خوانا باشه و بند چرمی نرمش استایلت رو شیک و مرتب نگه می‌داره. به‌خاطر ظاهر مینیمال، هم برای استایل روزمره خیلی مناسبِ، هم کنار لباس رسمی اصلاً تو ذوق نمی‌زنه. حس \"کم‌گو اما پُرمعنا\" میده، دقیقاً برای آدم‌هایی که دنبال ظرافت بی‌سر‌وصدا هستن.",
    //         favorite: false,
    //         img: "https://via.placeholder.com/400x300?text=Minimal+Classic",
    //         summery: "طراحی مینیمال، بند چرمی، صفحه 40mm",
    //         color: "#A8A29E"
    //     },
    //     {
    //         id: 2,
    //         title: "ساعت اسپرت دیجیتال",
    //         price: 210000,
    //         description: "اگر اهل ورزش، دویدن یا حتی پیاده‌روی روزانه‌ای، این ساعت دقیقاً همون رفیقیه که لازمت میشه. نور پس‌زمینه داره، کرنومتر داره و در برابر آب هم مقاومت خوب و قابل قبولی داره. خیلی سبکه و برای استفاده‌ی طولانی اصلاً اذیتت نمی‌کنه. ظاهر اسپرتش حس فعال بودن و پویایی میده و برای استایل‌های ورزشی و راحت عالیه.",
    //         favorite: true,
    //         img: "https://via.placeholder.com/400x300?text=Sport+Digital",
    //         summery: "ضدآب 50m، کرنومتر، مناسب ورزش",
    //         color: "#9CA3AF"
    //     },
    //     {
    //         id: 3,
    //         title: "ساعت مکانیکی اتوماتیک",
    //         price: 1250000,
    //         description: "این ساعت اصلاً برای همه نیست؛ برای کسانیه که از تماشای حرکت عقربه‌ها و صدای ظریف تیک‌تاک لذت می‌برن. موتور خودکوکش بدون باتری کار می‌کنه و با حرکت دستت انرژی می‌گیره. قاب استیل و شیشه‌ی ضدخش باعث میشه تا سال‌ها ظاهرش مثل روز اول بمونه. یک حس کلاسیک، اصیل و لوکس داره—مخصوص کسایی که \"روح ساعت\" براشون مهم‌تر از امکانات دیجیتاله.",
    //         favorite: false,
    //         img: "https://via.placeholder.com/400x300?text=Automatic",
    //         summery: "اتوماتیک خودکوک، شیشه ضدخش",
    //         color: "#6B7280"
    //     },
    //     {
    //         id: 4,
    //         title: "ساعت هوشمند روزمره",
    //         price: 780000,
    //         description: "یه گزینه‌ی خیلی راحت برای کسایی که می‌خوان بدون پرداخت هزینه‌ی زیاد، امکانات پایه‌ی یک ساعت هوشمند رو داشته باشن. نوتیفیکیشن‌ها رو نشون میده، گام‌شمار و ردیاب خواب داره و صفحه‌ی لمسیش کار کردن باهاش رو ساده می‌کنه. ظاهرش هم ساده‌ست و برای استفاده‌ی روزمره کاملاً مناسبه. نه خیلی حرفه‌ایه و نه خیلی ابتدایی—درست توی نقطه‌ی تعادل.",
    //         favorite: false,
    //         img: "https://via.placeholder.com/400x300?text=Smartproduct",
    //         summery: "نمایشگر لمسی، نوتیفیکیشن، گام‌شمار",
    //         color: "#D1D5DB"
    //     },
    //     {
    //         id: 5,
    //         title: "ساعت مجلسی طلایی",
    //         price: 980000,
    //         description: "اگه به دنبال یه ساعت براق و چشم‌گیر هستی که توی مهمونی‌ها بدرخشه، این یکی انتخاب بسیار مناسبیه. رنگ طلایی براق و بند فلزی ظریف باعث میشه حس لوکس‌بودن رو منتقل کنه. سبک طراحی‌اش رسمی و شیکه و با استایل مجلسی واقعاً خودش رو نشون میده. اون مدل ساعتیه که سریع جلب توجه می‌کنه بدون اینکه جیغ بزنه \"به من نگاه کن!\".",
    //         favorite: false,
    //         img: "https://via.placeholder.com/400x300?text=Golden+Elegant",
    //         summery: "بند فلزی طلایی، ظاهر لوکس",
    //         color: "#F3D9A4"
    //     },
    //     {
    //         id: 6,
    //         title: "ساعت اسپرت ضدضربه",
    //         price: 450000,
    //         description: "این ساعت برای شرایط خشن ساخته شده؛ چه کوه‌نوردی، چه دویدن در محیط‌های سخت، چه فعالیت‌های فیزیکی سنگین. بدنه‌ی مقاوم، ضدضربه بودن و مقاومتش در برابر آب باعث میشه برای ماجراجوها ارزشمند باشه. ظاهرش هم کمی خشن و مردانه‌ست و فوراً حس \"تجهیزات حرفه‌ای\" میده. ساعت روزمره نیست—ساعتیه برای موقعیت‌های جدی.",
    //         favorite: false,
    //         img: "https://via.placeholder.com/400x300?text=Rugged+Sport",
    //         summery: "ضدضربه، مقاومت بالا، ضدآب 100m",
    //         color: "#4B5563"
    //     },
    //     {
    //         id: 7,
    //         title: "ساعت دیجیتال کلاسیک",
    //         price: 190000,
    //         description: "اگه طرفدار سبک قدیمی و نوستالژیک هستی، این ساعت احتمالاً لبخند روی لبت میاره. سبک دیجیتال کلاسیکش همون vibes دهه‌های قبل رو میده اما با امکانات پایه‌ی لازم مثل نور پس‌زمینه و تقویم. بسیار سبکه و برای استفاده‌ی روزمره عالیه، مخصوصاً اگر تیپ کژوال و دوستانه داشته باشی. بی‌ادعا اما جذاب.",
    //         favorite: true,
    //         img: "https://via.placeholder.com/400x300?text=Retro+Digital",
    //         summery: "سبک رترو، وزن سبک",
    //         color: "#8D8D8D"
    //     },
    //     {
    //         id: 8,
    //         title: "ساعت چوبی دست‌ساز",
    //         price: 650000,
    //         description: "این ساعت توی دسته‌ی \"خاص‌پسند\" قرار می‌گیره. چون از چوب طبیعی ساخته شده، هر ساعت یک الگوی چوبیِ منحصر به‌فرد داره. سبک و راحت روی دست می‌شینه و حس طبیعت، سادگی و آرامش منتقل می‌کنه. اگر دنبال چیزی هستی که صنعتی یا تکراری نباشه، این یکی شخصیت و روح خودش رو داره—یه حالت گرم و هنری.",
    //         favorite: false,
    //         img: "https://via.placeholder.com/400x300?text=Wooden+product",
    //         summery: "چوب طبیعی، سبک، طراحی خاص",
    //         color: "#C8A575"
    //     },
    //     {
    //         id: 9,
    //         title: "ساعت فشن رنگی",
    //         price: 230000,
    //         description: "این ساعت مخصوص آدم‌هایی‌یه که دوست دارن رنگ و انرژی رو وارد استایلشون کنن. طراحی ساده اما جوان‌پسند، رنگ‌های شاد و وزن سبک باعث میشه برای دانشگاه، بیرون رفتن‌های معمولی و استایل‌های کژوال عالی باشه. اون چیزی نیست که بخوای با کت‌وشلوار بزنی؛ برای vibe شاد و سرزنده ساخته شده.",
    //         favorite: false,
    //         img: "https://via.placeholder.com/400x300?text=Colorful+Fashion",
    //         summery: "رنگی، سبک، مناسب استایل کژوال",
    //         color: "#FFB3B3"
    //     },
    //     {
    //         id: 10,
    //         title: "ساعت فول‌استیل نقره‌ای",
    //         price: 520000,
    //         description: "ساده، شیک، مقاومت بالا و همیشه قابل‌اعتماد. این مدل برای استایل رسمی و روزمره هر دو مناسبِ و ظاهر استیل نقره‌ایش هیچوقت از مُد نمیفته. وزن قابل قبولی داره و حس حرفه‌ای بودن رو منتقل می‌کنه. اگر یه ساعت می‌خوای که سال‌ها بدون دغدغه استفاده کنی، این یکی از بهترین گزینه‌هاست.",
    //         favorite: false,
    //         img: "https://via.placeholder.com/400x300?text=Silver+Steel",
    //         summery: "فول‌استیل، دوام بالا، رسمی",
    //         color: "#D0D5DA"
    //     }
    // ]);

    // API related stated
    const [product , setProduct] = useState([]);
    const [loading , setLoading] = useState(false);
    const [error , setError] = useState(null);

    //search related states
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
                    setProduct(data.map(item => ({ ...item, favorite: false })));
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
            setProduct(perv => perv.filter(w => w.title.toLowerCase().includes(item.toLowerCase())));
        } else {
            emptySearchInput();
        }
    }
    function emptySearchInput(){
        setSearchValue("");

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
