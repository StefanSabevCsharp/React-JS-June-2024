import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

import useForm from '../../hooks/useForm';
import { useCreateClothes } from '../../hooks/useClothes';
import { isValidCreateClothes } from '../../../validations/formValidator';
import ErrorMessage from '../error/ErrorMessage';
import Modal from '../../modal/Modal';

const initialState = {
    title: '',
    description: '',
    imageUrl: '',
    price: '',

}

export default function Create() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');


    const submitHandler = (form) => {
        const errors = isValidCreateClothes(form);
        if (Object.keys(errors).length > 0) {
            setErrorMessage(Object.values(errors).join(", "));
            return;
        }
        try{
            const newcloth = useCreateClothes(form);
            newcloth.then((res) => {
                const _id = res._id;
                navigate(`/catalog/${_id}`);
            }).catch(err => {
                setErrorMessage(err.message);
            });
        }catch(err){
            setErrorMessage(err.message);
        }
       
    }


    const { form, changeHandler, onSubmit } = useForm(initialState, submitHandler);

    useEffect(() => {
        if (errorMessage) {
            const timer = setTimeout(() => {
                setErrorMessage('');
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [errorMessage]);

    return (
        <>
            {errorMessage && <Modal message={errorMessage} close={() => { setErrorMessage("") }} />}
            <div className="flex justify-center">
                <div className="max-w-xl w-full px-4 lg:px-10 py-14 pt-10">

                    <form onSubmit={onSubmit}>
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
                        {/* {errorMessage && <ErrorMessage error={errorMessage} />} */}
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
        </>
    );
}

