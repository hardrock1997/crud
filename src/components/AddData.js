import styles from '../components/AddData.module.css';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
export default function AddData({setEmployeesData,setEmployeesDataCopy}) {

    const [val,setVal]=useState({
        firstName:'',
        lastName:'',
        email:'',
        isEdit:false
    });
    const [id,setId] = useState(1011);
    const navigate=useNavigate();

    function handleChange(e) {
            setVal(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
    function addData() {

        if(val.firstName.length>0 && val.email.length>0 && val.lastName.length>0) {

        setEmployeesData((prev)=>
          [...prev,{id:id,firstName:val.firstName,lastName:val.lastName,email:val.email,isEdit:false}]
        );
        setEmployeesDataCopy((prev)=>
        [...prev,{id:id,firstName:val.firstName,lastName:val.lastName,email:val.email,isEdit:false}]
        );
        setId((prev)=>prev+1);

        setVal(
           {firstName:'',
           lastName:'',
           email:''
        } 
        )
    }
    }
    function routeBack() {
        navigate('/')
    }
  
    return (
        <>
        <div className={styles.main_container}>
                <input type='text' placeholder='Enter here to add First Name' className={styles.bar} value={val.firstName} onChange={handleChange} name='firstName'/>
                <input type='text' placeholder='Enter here to add Last Name' className={styles.bar} value={val.lastName} onChange={handleChange} name='lastName'/>
                <input type='text' placeholder='Enter here to add Email' className={styles.bar} value={val.email} onChange={handleChange} name='email'/>
        </div>
        <div className={styles.button}>
                <button className={styles.add} onClick={addData}>Add</button>
                <button className={styles.add} onClick={routeBack}>Back</button>
        </div>
        </>
    )
}