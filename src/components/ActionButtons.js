import styles from '../components/ActionButtons.module.css';
export default function ActionButtons({id,deleteEmployee}) {
    
    return (
        <div className={styles.buttons}>
            <button className={styles.edit}>Edit</button>
            <button className={styles.delete} onClick={()=>deleteEmployee(id)}>Delete</button>
        </div>
    )
}