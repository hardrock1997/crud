import styles from '../components/Edit.module.css';

export default function Edit({setEmployeesData,isEdit,setEmployeesDataCopy,data,dataToEdit,setDataToEdit,id}) {

    function handleCancel() {
        const resetData=data.map((val)=>{
            val.isEdit=false;
            return val;
        })
        setEmployeesData(resetData);
        setEmployeesDataCopy(resetData);
    }

    function handleSave(id) {
      
        const saveData={firstName:dataToEdit.firstName,lastName:dataToEdit.lastName,email:dataToEdit.email,isEdit:dataToEdit.isEdit};
        saveData.isEdit=false;
         const newData=data.map((val)=>{
            if(val.id===id) return saveData;
             return val;
        })
        setEmployeesData(newData);
        setEmployeesDataCopy(newData);
    }

    function handleChange(e) {
        setDataToEdit((prev)=>({...prev,[e.target.name]:e.target.value}));
    }
    return (
        
            <tr>
                <td><input type='text' value={dataToEdit.firstName} name='firstName' onChange={handleChange}/></td>
                <td><input type='text' value={dataToEdit.lastName} name='lastName' onChange={handleChange}/></td>
                <td><input type='text' value={dataToEdit.email} name='email' onChange={handleChange}/></td>
                <td>
                <div className={styles.buttons}>
                    <button className={styles.save} onClick={()=>handleSave(id)}>Save</button>
                    <button className={styles.cancel} onClick={handleCancel}>Cancel</button>
                </div>
                </td>
            </tr>
        
    )
}