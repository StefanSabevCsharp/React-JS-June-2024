// 'use client'

// import { useState } from 'react'
// import { StarIcon } from '@heroicons/react/20/solid'
// import { Radio, RadioGroup } from '@headlessui/react'

// const product = {
//     name: 'Basic Tee 6-Pack',
//     price: '$192',
//     href: '#',
//     breadcrumbs: [
//         { id: 1, name: 'Men', href: '#' },
//         { id: 2, name: 'Clothing', href: '#' },
//     ],
//     images: [
//         {
//             src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
//             alt: 'Two each of gray, white, and black shirts laying flat.',
//         },
//         {
//             src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
//             alt: 'Model wearing plain black basic tee.',
//         },
//         {
//             src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
//             alt: 'Model wearing plain gray basic tee.',
//         },
//         {
//             src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
//             alt: 'Model wearing plain white basic tee.',
//         },
//     ],
//     colors: [
//         { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
//         { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
//         { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
//     ],
//     sizes: [
//         { name: 'XXS', inStock: false },
//         { name: 'XS', inStock: true },
//         { name: 'S', inStock: true },
//         { name: 'M', inStock: true },
//         { name: 'L', inStock: true },
//         { name: 'XL', inStock: true },
//         { name: '2XL', inStock: true },
//         { name: '3XL', inStock: true },
//     ],
//     description:
//         'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
//     highlights: [
//         'Hand cut and sewn locally',
//         'Dyed with our proprietary colors',
//         'Pre-washed & pre-shrunk',
//         'Ultra-soft 100% cotton',
//     ],
//     details:
//         'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
// }
// const reviews = { href: '#', average: 4, totalCount: 117 }

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { get } from "../../dataService/requester";
const BASE_URL = 'http://localhost:3030/jsonstore/clothes/clothes/';

export default function SingleProduct() {
    const [product, setProduct] = useState({});
    const productId = useParams()._id;
    console.log(`id is ${productId}`);

    useEffect(() => {
        (
            async () => {
                const responce = await fetch(BASE_URL + productId);
                
                const data = await responce.json();
                setProduct(data);
            }
        )();
    }, []);
    console.log(product);

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
                                        type="submit"
                                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        type="submit"
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
