
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { get } from "../../dataService/requester";
import useFetch from "../../hooks/useFetch";

import { useNavigate } from 'react-router-dom';


export default function SingleProduct() {
    
    const navigate = useNavigate();
    const productId = useParams()._id;
    const url = `clothes/clothes/${productId}`;
    const { data : product, loading } = useFetch(url, {});
    

    return (
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 mt-8">

            <div className="bg-white">
                <div className="pt-6">
                    {/* Image and Product info */}
                    <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        {/* Image gallery */}
                        <div className="lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                            <img
                                src={product.imageUrl}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>

                        {/* Product info */}
                        <div className="px-4 pb-8 pt-8 sm:px-6 lg:pb-8 lg:pt-8">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.title}</h1>
                            <p className="text-3xl tracking-tight text-gray-900 mt-2">${product.price}</p>

                            {/* Reviews */}


                            <form className="mt-4">
                                <div className="flex space-x-2 mt-4">
                                    <button
                                        type="button"
                                        onClick={() => navigate(`/edit/${product._id}`)}
                                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => {deleteItemHandler(product._id)}}
                                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </form>

                            {/* Description and details */}
                            <div className="mt-8">
                                <div>
                                    <p className="text-base text-gray-900">{product.description}</p>
                                </div>




                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
