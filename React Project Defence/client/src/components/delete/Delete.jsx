import { Navigate, useParams } from "react-router-dom";
import { useDeleteClothes } from "../../hooks/useClothes";
import { useState } from "react";
import Modal from "../../modal/Modal";


export default function Delete() {
    const productID = useParams()._id;
    const [error, setError] = useState("");

    try {
        useDeleteClothes(productID);

    } catch (error) {
        setError(error.message);
    }


    return (
        <>
            {error && <Modal message={error} close={() => setError("")} />}
            <Navigate to="/catalog" />
        </>
    );
}