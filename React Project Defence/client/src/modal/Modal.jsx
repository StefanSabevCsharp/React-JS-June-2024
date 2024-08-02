import styles from "./style.module.css";

export default function Modal({ message, close }) {
    return (
        <div className={styles.overlay}>
            <div className={styles.modal} >
                <button className={styles.closeButton} onClick={close}>
                    &times;
                </button>
                <h1 style={{fontWeight:"bold" , marginBottom:"20px"}}>Opps.. There is an error !</h1>
                
                <h2>{message}</h2>
            </div>
        </div>
    );
}