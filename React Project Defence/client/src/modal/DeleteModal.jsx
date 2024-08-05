import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";

export default function DeleteModal({ close , productId }) {
    const navigate = useNavigate();

    return (
        <div className={styles.overlay}>
            <div className={styles.modal} >

                <h1 style={{ fontWeight: "bold", marginBottom: "20px" }}>Are you sure you want to delete this product?</h1>
                <div className={styles.buttons}>
                    <button onClick={close} className={styles.cancel}>Cancel</button>
                <button onClick={() => navigate(`/delete/${productId}`)} className={styles.delete}>Delete</button>
                </div>
            </div>
        </div>
    );
}