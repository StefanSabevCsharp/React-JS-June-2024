
import { Link } from "react-router-dom";
import { useState } from "react";

import useFetch from "../../hooks/useFetch";
import SearchInput from "./SearchInput";
import SearchContext from "../../context/searchContext";
import Pagination from "../pagination/Pagination";
import { useGetClothes } from "../../hooks/useClothes";
import Modal from "../../modal/Modal";


export default function Search() {
    const [searchParam, setSearchParam] = useState("");
    const [productsPerPage, setProductsPerPage] = useState(8);
    const [currentPage, setCurrentPage] = useState(1);
    const [error, setError] = useState("");
  
    let products = useGetClothes();
    if(products.error){
        setError(products.error);
    }

    if (searchParam) {
        products = products.filter((product) => product.title.toLowerCase().includes(searchParam.toLowerCase()));
    }

    const lastProductIndex = currentPage * productsPerPage;
    const firstProductIndex = lastProductIndex - productsPerPage;
    const currentProducts = products.slice(firstProductIndex, lastProductIndex);

    return (
        <>
        {error && <Modal message={error} close={() => setError('')} />}
            <SearchContext.Provider value={setSearchParam}>
                <SearchInput />
                <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8 mt-8">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-10">
                        {currentProducts.map((product) => (
                            <Link

                                key={product._id} to={`/catalog/${product._id}`} className="group">
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
                </div>
                <Pagination products={products} productsPerPage={productsPerPage} setCurrentPage={setCurrentPage} />
            </SearchContext.Provider>

        </>
    );
}