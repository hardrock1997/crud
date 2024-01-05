import styles from '../components/AddData.module.css';
import { useState} from 'react';
export default function AddData({setEmployeesData,setEmployeesDataCopy}) {

    const [val,setVal]=useState({
        firstName:'',
        lastName:'',
        email:''
    });

    const [id,setId] = useState(1011);

    function handleChange(e) {
            setVal(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
    function addData(e) {

        setEmployeesData((prev)=>
          [...prev,{id:id,firstName:val.firstName,lastName:val.lastName,email:val.email}]
        );
        setEmployeesDataCopy((prev)=>
        [...prev,{id:id,firstName:val.firstName,lastName:val.lastName,email:val.email}]
        );
        setId((prev)=>prev+1);

        setVal(
           {firstName:'',
           lastName:'',
           email:''
        } 
        )
    }
    return (
        <>
        <div className={styles.main_container}>
                <input type='text' placeholder='Enter here to add data' className={styles.bar} value={val.firstName} onChange={handleChange} name='firstName'/>
                <input type='text' placeholder='Enter here to add data' className={styles.bar} value={val.lastName} onChange={handleChange} name='lastName'/>
                <input type='text' placeholder='Enter here to add data' className={styles.bar} value={val.email} onChange={handleChange} name='email'/>
        </div>
        <div className={styles.button}>
                <button className={styles.add} onClick={addData}>Add</button>
        </div>
        </>
    )
}