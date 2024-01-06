import Search from './Search';
import Table from './Table';
import useFetchData from '../hooks/useFetchData';
import AddData from './AddData';

export default function Body() {
  
    const [employeesData,setEmployeesData,employeesDataCopy,setEmployeesDataCopy] = useFetchData();
    
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
              {employeesData && <AddData setEmployeesData={setEmployeesData} setEmployeesDataCopy={setEmployeesDataCopy}/>}
              {employeesData && <Table data={employeesData} dataCopy={employeesDataCopy} setEmployeesData={setEmployeesData} setEmployeesDataCopy={setEmployeesDataCopy}/>}
            
        </div>
    
    )
}
