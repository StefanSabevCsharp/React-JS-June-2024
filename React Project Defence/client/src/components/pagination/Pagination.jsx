import styles from "./pagination.module.css";

export default function Pagination({ products, productsPerPage,setCurrentPage }) {
    let pages = [];

    for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className={styles.pagination}>
            {pages.map((page, index) => (
                <button className={styles.button} key={index} onClick={() => setCurrentPage(page)} >{page}</button>
            ))}
        </div>
        
         
    );
}