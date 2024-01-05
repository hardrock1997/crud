import styles from '../components/Search.module.css';
export default function Search({data,onChange}) {
    return (
       <div className={styles.main_container}>
                <input type="text" className={styles.bar} placeholder='Enter to search...' onChange={onChange}/> 
       </div>
    )
}