import { Description } from '@headlessui/react';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { post } from '../../dataService/requester';
import validator from "validator";
import { Navigate, useNavigate } from 'react-router-dom';

import useForm from '../../hooks/useForm';

const BASE_URL = 'http://localhost:3030/jsonstore/clothes/clothes/';



export default function Create() {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const initialState = {
        title: '',
        description: '',
        imageUrl: '',
        price: '',
        createdAt: Date.now()
    }
    // const [item, setItem] = useState({
    //     title: '',
    //     description: '',
    //     imageUrl: '',
    //     price: '',
    //     createdAt: Date.now()
    // });
    
    const {form,changeHandler} = useForm(initialState);
    

    const formsubmitHandler = async (e) => {
        e.preventDefault();
       

        let errors = {};

        if (validator.isEmpty(form.title)) {
            errors.title = 'Title is required';
        }

        if (validator.isEmpty(form.imageUrl)) {
            errors.imageUrl = 'Image URL is required';
        } else if (!validator.isURL(form.imageUrl)) {
            errors.imageUrl = 'Invalid Image URL';
        }

        if (validator.isEmpty(form.price)) {
            errors.price = 'Price is required';
        } else if (!validator.isNumeric(form.price)) {
            errors.price = 'Price must be a number';
        }

        if (validator.isEmpty(form.description)) {
            errors.description = 'Description is required';
        }

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            //TO DO : display errors in modal
            return;
        }
        try{
            const response = await post(BASE_URL, form);
            navigate(`/catalog/${response._id}`);
        }catch(err){
            setErrors({message: err.message});
        }

    };


    return (
        <div className="flex justify-center">
            <div className="max-w-xl w-full px-4 lg:px-10 py-14 pt-10">
                <form onSubmit={formsubmitHandler}>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <h1 className="text-3xl font-semibold text-center text-gray-900 mt-20">Create New Item</h1>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                                    <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900">
                                        Title
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="title"
                                            name="title"
                                            value={form.title}
                                            onChange={changeHandler}
                                            placeholder="Title..."
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900">
                                        Image Url
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="image"
                                            name="imageUrl"
                                            value={form.imageUrl}
                                            onChange={changeHandler}
                                            placeholder="Image Url..."
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                                        Price
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="number"
                                            id="price"
                                            name="price"
                                            value={form.price}
                                            onChange={changeHandler}
                                            placeholder="123..."
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                        Description
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="description"
                                            name="description"
                                            rows={3}
                                            value={form.description}
                                            onChange={changeHandler}
                                            placeholder="Description..."
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                           
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
