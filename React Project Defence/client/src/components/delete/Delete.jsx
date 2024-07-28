import { Navigate, useParams } from "react-router-dom";
import { useDeleteClothes } from "../../hooks/useClothes";

export default  function Delete() {
    const productID = useParams()._id;
    useDeleteClothes(productID);
   

  return (
    <Navigate to="/catalog" />
  );
}