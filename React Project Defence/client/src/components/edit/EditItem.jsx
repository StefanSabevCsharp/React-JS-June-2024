import { useContext, useState } from "react";
import AuthContext from "../../context/authContext";
import { useNavigate, useParams } from "react-router-dom";

import {useGetSingleClothes} from "../../hooks/useClothes";
import useForm from "../../hooks/useForm";
import { updateClothes } from "../../dataService/clothesService";
import { isValidCreateClothes } from "../../../validations/formValidator";
import Modal from "../../modal/Modal";


    export default function EditItem() {
    const ctx = useContext(AuthContext);
    const {_id :productId} = useParams();
    const navigate = useNavigate();
    const [product] = useGetSingleClothes(productId);
    const [error,setError] = useState('');

    const submitHandler = async (form) => {
        const errors = isValidCreateClothes(form);
        if (Object.keys(errors).length > 0) {
            setError(Object.values(errors).join(", "));
            return;
        }
        try{
            await updateClothes(productId,form);
            navigate(`/catalog/${product._id}`);
        }catch(err){
            setError(err.message);
        }
        
    }

     const {form,changeHandler,onSubmit} = useForm(product,submitHandler,{reinitialize:true});
    //  const isOwner = product._ownerId == ctx.userId && product._ownerId !== undefined;

    return (
        <>
            {error && <Modal message={error} close={() => {setError("")}} />}
            <div className="flex justify-center">
                <div className="max-w-xl w-full px-4 lg:px-10 py-14 pt-10">
                    <form onSubmit={onSubmit}>
                        <div className="space-y-12">
                            <div className="border-b border-gray-900/10 pb-12">
                                <h1 className="text-3xl font-semibold text-center text-gray-900 mt-20">Edit Item</h1>
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
                                Edit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
       
    );

}



// const initialState = {
//     title: '',
//     description: '',
//     imageUrl: '',
//     price: '',

// }

// export default function EditItem() {
//     const ctx = useContext(AuthContext);
//     const navigate = useNavigate();
//     const { _id: productId } = useParams();
//     const data = useGetSingleClothes(productId);
//     const [productData, setProductData] = useState(null);
//     const submitHandler = async (form) => {
//        await updateClothes(productId,form);
//          navigate(`/catalog/${productId}`);
       
//     }

//     const {form,changeHandler,onSubmit,setFormState} = useForm(initialState,submitHandler);

    
//      const isOwner = data._ownerId == ctx.userId && data._ownerId !== undefined;
  
     
//     console.log(data);
//     useEffect(() => {
//         console.log('useEffect run', { data, productData });
//         if (data && !productData) {
//             setProductData(data);
//             setFormState({
//                 title: data.title,
//                 description: data.description,
//                 imageUrl: data.imageUrl,
//                 price: data.price
//             });
//         }
//     }, [data]);