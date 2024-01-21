import Search from './Search';
import Table from './Table';
import styles from '../components/Body.module.css';
import { Link } from 'react-router-dom';

export default function Body({employeesData,setEmployeesData,employeesDataCopy,setEmployeesDataCopy}) {

    
    function onChange(e) {
        
        const values=employeesDataCopy.filter((val)=>{
            return val.firstName.toLowerCase().includes(e.target.value.toLowerCase()) || val.lastName.toLowerCase().includes(e.target.value.toLowerCase) || val.email.toLowerCase().includes(e.target.value.toLowerCase());
        })
        if(e.target.value===''){
            setEmployeesData(employeesDataCopy)
        }
        else {
            setEmployeesData(values)
        }
        
    }
 
    return (
    
        <div>


              {employeesData && <Search data={employeesData} onChange={onChange}/>}
              <Link to='/add'><button className={styles.add}>Add Data</button></Link>
              {employeesData && <Table data={employeesData} dataCopy={employeesDataCopy} setEmployeesData={setEmployeesData} setEmployeesDataCopy={setEmployeesDataCopy}/>}
            
        </div>
    
    )
}
