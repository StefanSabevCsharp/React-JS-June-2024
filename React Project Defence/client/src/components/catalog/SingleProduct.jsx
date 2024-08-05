import { useContext , useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

import AuthContext from "../../context/authContext";
import { useGetSingleClothes } from "../../hooks/useClothes";
import useForm from "../../hooks/useForm";
import Comments from "./comments/Comments";
import {useCreateComment, useGetComments} from "../../hooks/useComments";
import Modal from "../../modal/Modal";
import DeleteModal from "../../modal/DeleteModal";

const InitialValues = {
    comment: ''
}

export default function SingleProduct() {
    const { userId, isAuthenticated ,email} = useContext(AuthContext);
    const { _id } = useParams();
    const navigate = useNavigate();
    const createComment = useCreateComment();
    const [error,setError] = useState("");
    const [deleteProduct,setDeleteProduct] = useState(false);
    const deleteMessage = "Are you sure you want to delete this product ?";

    const [singleCloth, setSingleCloth] = useGetSingleClothes(_id);
    const [comments,setComments] = useGetComments(_id);
    
    if(!singleCloth.title){
        navigate("/404");
    }
    if(singleCloth.error){
        setError(singleCloth.error);
    }
    if(comments.error){
        setError(comments.error);
    }

    const submitHandler = async ({ comment }) => {

        if(comment.trim() === "" || comment.length < 2) {
            setError("Comment must be at least 2 characters long");
            return;
        }
      
        try{
            const newComment = await createComment(_id, comment);
            newComment.author = { email: email };
            setComments( state => [...state,newComment]);
            setForm(InitialValues);
        }catch(error){
            setError(error.message);
        }

    }
    const { form, changeHandler, onSubmit,setForm } = useForm(InitialValues, submitHandler);

    const isOwner = singleCloth._ownerId == userId && singleCloth._ownerId !== undefined;
    return (
        <>
         {error && <Modal message={error} close={() => setError("")} />}
            {deleteProduct && <DeleteModal close={() => setDeleteProduct(!deleteProduct)} productId={_id}/>}
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 mt-8">

                <div className="bg-white">
                    <div className="pt-6">
                        {/* Image and Product info */}
                        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                            {/* Image gallery */}
                            <div className="lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                                <img
                                    src={singleCloth.imageUrl}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>

                            {/* Product info */}
                            <div className="px-4 pb-8 pt-8 sm:px-6 lg:pb-8 lg:pt-8">
                                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{singleCloth.title}</h1>
                                <p className="text-3xl tracking-tight text-gray-900 mt-2">${singleCloth.price}</p>

                                {isOwner && (
                                <form className="mt-4">
                                    <div className="flex space-x-2 mt-4">
                                        <button
                                            type="button"
                                            onClick={() => navigate(`/edit/${singleCloth._id}`)}
                                            className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setDeleteProduct(true)}
                                            className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </form>

                                )} 
                                {/* Description and details */}
                                <div className="mt-8">
                                    <div>
                                        <p className="text-base text-gray-900">{singleCloth.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Comments comments={Object.values(comments)} />
            {isAuthenticated && (
                <form className="flex justify-center items-center mt-6" onSubmit={onSubmit}>
                    <div className="bg-gray-100 p-4 max-w-md w-full rounded-lg shadow-md border">
                        <p className="text-lg font-semibold text-blue-900 cursor-pointer transition-all hover:text-black mb-4">
                            Add Comment
                        </p>
                        <textarea
                            className="h-32 px-3 text-sm py-2 w-full resize-none border rounded-lg placeholder:text-sm"
                            placeholder="Add your comments here"
                            name="comment"
                            value={form.comment}
                            onChange={changeHandler}
                        />
                        <div className="flex justify-between mt-4">
                            <span></span>
                            <button
                                type="submit"
                                className="h-10 w-[120px] bg-blue-400 text-sm text-white rounded-lg transition-all cursor-pointer hover:bg-blue-600"
                            >
                                Submit comment
                            </button>
                        </div>
                    </div>
                </form>
            )}


        </>

    )
}

// const ctx = useContext(AuthContext);
//     const _id = useParams()._id;
//     const navigate = useNavigate();
//     const product = useGetSingleClothes(_id);
//     const comments = useGetComments(_id);

//     const submitHandler = async (form) => {
//          await createComment({ comment: form.comment, productId: _id });
//    }

//    const initialState = {
//     comment: ''
//    }
//    const {form,changeHandler,onSubmit} = useForm(initialState,submitHandler);

//    const isOwner = product._ownerId == ctx.userId && product._ownerId !== undefined;