import { useEffect, useState } from "react";
import { createComment , getComments } from "../dataService/commentService";

export function useCreateComment() {
    const commentCreateHandler = async (productID,comment) => {
      const result =  await createComment(comment, productID);
    return result;
    }
    return commentCreateHandler;
}

export function useGetComments(productId) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        async function fetchComments() {
            try{
                const comments = await getComments(productId);
                setComments(comments);
            }catch(err){
                setComments({error: err.message});
            }
            
        }
        fetchComments();
    }, [productId]);

    return [comments, setComments];
}