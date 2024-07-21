
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import SearchInput from "./SearchInput";

export default function Search() {
 const products = useFetch("clothes/clothes", []).reverse();

    return (
        <>
            <SearchInput />
            <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-10">
                    {products.map((product) => (
                        <Link

                            key={product._id} to={`/catalog/${product._id}`}className="group">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img
                                    src={product.imageUrl}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-3 text-sm text-gray-700">{product.title}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
                        </Link>
                    ))}
                </div>

        </>
    );
}