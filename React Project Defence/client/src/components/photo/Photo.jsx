import { isImageUrl } from '../../../validations/formValidator';
import useForm from '../../hooks/useForm';
import styles from './style.module.css';

export default function Photo({ closeModal , setPhoto ,setError }) {

    const submitHandler = async (data) => {
        const result = await isImageUrl(data.url);
        if(!result){
            setError('Invalid URL');
            return;
        }
        setPhoto(data.url);
        closeModal();
       
    }
    const {form ,onSubmit , changeHandler} = useForm({url:''},submitHandler);
    
    return (
        <div className={styles.overlay}>
            <div className={styles.modal} >
                <button className={styles.closeButton} onClick={closeModal}>
                    &times;
                </button>
                <h2>Enter URL</h2>
                <form id="urlForm" onSubmit={onSubmit}>
                    <label htmlFor="url">URL:</label>
                    <input
                        
                        id="url"
                        name="url"
                        value={form.url}
                        onChange={changeHandler}
                        placeholder="https://example.com"
                        required
                    />
                    <button type="submit" className={styles.submitButton}>Submit</button>        
                </form>
            </div>
        </div>
    );
}