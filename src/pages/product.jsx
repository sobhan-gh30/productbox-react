import { useEffect, useState } from "react";
import Loader from "../components/Loader.jsx";
import swal from "sweetalert";
import {Link, useParams} from "react-router";

export default function Product() {
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProduct() {
            try {
                setLoading(true);
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                if (!response.ok) throw new Error("Failed to fetch product");
                const data = await response.json();
                setProduct(data);
            } catch (err) {
                setError(err);
                swal("Oops!", "Failed to fetch the product.", "error");
            } finally {
                setLoading(false);
            }
        }

        fetchProduct();
    }, [id]);

    if (loading) return <Loader />;
    if (!product) return null;

    const { title, price, description, category, image } = product;

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">

                {/* Image */}
                <div className="bg-gray-50 flex items-center justify-center p-6">
                    <img
                        src={image}
                        alt={title}
                        className="max-h-96 object-contain"
                    />
                </div>

                {/* Info */}
                <div className="p-6 flex flex-col gap-4">
          <span className="text-sm uppercase tracking-wide text-gray-500">
            {category}
          </span>

                    <h1 className="text-2xl font-bold text-gray-900">
                        {title}
                    </h1>

                    <p className="text-gray-600 leading-relaxed">
                        {description}
                    </p>

                    <div className="mt-auto flex items-center justify-between">
            <span className="text-2xl font-semibold text-green-600">
              ${price}
            </span>
                        <div>
                            <Link to={"/"} className="bg-red-50 border border-red-600 text-red-600 px-6 py-2 rounded-xl hover:bg-red-100 transition mx-1">
                                Back
                            </Link>
                            <button className="bg-green-50 border border-green-600 text-green-600 px-6 py-2 rounded-xl hover:bg-green-100 transition">
                                add to cart
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
