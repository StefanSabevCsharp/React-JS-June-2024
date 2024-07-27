import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../pagination/Pagination';
import { useGetClothes } from '../../hooks/useClothes';



const clothesUrl = "clothes/clothes";



export default function Catalog() {
    const [productsPerPage, setProductsPerPage] = useState(8);
    const [currentPage, setCurrentPage] = useState(1);

    //  const products = Object.values(data).sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));
    
    const data = useGetClothes();
    const products = Object.values(data);

    const lastProductIndex = currentPage * productsPerPage;
    const firstProductIndex = lastProductIndex - productsPerPage;
    const currentProducts = products.slice(firstProductIndex, lastProductIndex);

    return (
        <>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8 mt-8">
                    <h1 className="text-center mb-10 text-3xl sm:text-4xl font-bold leading-tight text-gray-900">Catalog</h1>
                    <h2 className="sr-only">Products</h2>

                    <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {currentProducts.map((product) => (
                            <Link

                                key={product._id} to={product._id} className="group">
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
            </div>
                <Pagination products={products} productsPerPage={productsPerPage} setCurrentPage={setCurrentPage} />
           
        </>

    );
}
