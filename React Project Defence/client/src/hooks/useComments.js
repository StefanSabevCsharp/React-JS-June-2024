import { useState, useEffect } from "react";
import { getComments } from "../dataService/commentService";


export const useGetComments = (productId) => {
    const [comments,setComments] = useState([]);
    
    useEffect( () => {
        (
            async () => {
                const data = await getComments(productId);
                setComments(data);
            }
        )();
    },[productId]);

    return comments;
}