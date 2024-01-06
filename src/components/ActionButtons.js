import styles from '../components/ActionButtons.module.css';
export default function ActionButtons({id,deleteEmployee,editEmployeeData,isEdit}) {
    return (
        <div className={styles.buttons}>
            <button className={styles.edit} onClick={()=>editEmployeeData(id)}>Edit</button>
            <button className={styles.delete} onClick={()=>deleteEmployee(id)}>Delete</button>
        </div>
    )
}