import { useNavigate, useParams } from "react-router-dom"

import { useGetSingleClothes } from "../../hooks/useClothes";
import useForm from "../../hooks/useForm";
import { createComment } from "../../dataService/commentService";
import { useState } from "react";
import { useGetComments } from "../../hooks/useComments";
import Comments from "./comments/Comments";


export default function SingleProduct() {
  
    const _id = useParams()._id;
    const navigate = useNavigate();
    const product = useGetSingleClothes(_id);
    const comments = useGetComments(_id);

    const submitHandler = async (form) => {
         await createComment({ comment: form.comment, productId: _id });
        
         //TO DO : send user username or email to comments component
         // Refetch comments
   }

   const initialState = {
    comment: ''
   }
   const {form,changeHandler,onSubmit} = useForm(initialState,submitHandler);
  
    
    return (
        <>
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
                                            onClick={() => { deleteItemHandler(product._id) }}
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

          <Comments comments={Object.values(comments)}  />
           
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

        </>
        
    )
}



// const [comments,setComments] = useState([]);

// const navigate = useNavigate();
// const productId = useParams()._id;
// const url = `clothes/clothes/${productId}`;

// const { data: product, loading, refetch } = useFetch(url, {});


// const initialState = {
//     comment: ''
// }

// const { form, changeHandler } = useForm(initialState);

// const onSubmit = async (e) => {

//     e.preventDefault();
//     console.log(form.comment);
//     console.log(productId);
//     const data = {
//         comment: form.comment,
//         productId
//     }

//     const result = await createComment({ comment: form.comment, productId });
    
//     refetch();
// }

// const productComments = Object.values(product.comments || {}).map(commentText => ({
//     text: commentText
// }));
// setComments(productComments);

// //TO DO : send user username or email to comments component


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const [product, setProduct] = useState({});
//     const [comments, setComments] = useState([]);
//     const navigate = useNavigate();
//     const { _id: productId } = useParams();
//     const url = `clothes/clothes/${productId}`;

//     // Fetch product data
//     const { data, loading } = useFetch(url, {});

//     // Set product and comments when data is fetched
//     useEffect(() => {
//         if (data) {
//             setProduct(data);
//             const productComments = Object.values(data.comments || {}).map(commentText => ({
//                 text: commentText
//             }));
//             setComments(productComments);
//         }
//     }, [data]);

//     const initialState = {
//         comment: ''
//     }

//     const { form, changeHandler } = useForm(initialState);

//     // Handle comment submission
//     const onSubmit = async (e) => {
//         e.preventDefault();

//         const newComment = {
//             comment: form.comment,
//             productId
//         };

//         try {
//             await createComment(newComment);
//             // Update comments locally without refetching the whole product
//             const updatedComments = [...comments, { text: form.comment }];
//             setComments(updatedComments);
//             // Clear the form
//             changeHandler({ target: { name: 'comment', value: '' } });
//         } catch (error) {
//             console.error("Error adding comment:", error);
//         }
//     }

//     console.log("fetching data");
