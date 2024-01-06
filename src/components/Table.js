import styles from '../components/Table.module.css';
import ActionButtons from './ActionButtons';
import Edit from './Edit';
import React, { useState } from 'react';

export default function Table({data,dataCopy,setEmployeesData,setEmployeesDataCopy}) {
 
    const [dataToEdit,setDataToEdit]=useState({});
    function deleteEmployee(id) {
        const afterDeletion = dataCopy.filter((val)=>{
            return val.id!==id;
        })
        setEmployeesDataCopy(afterDeletion);
        setEmployeesData(afterDeletion);

    }
    function editEmployeeData(id) {
        const toEditRow=data.find((val)=>val.id===id);
        toEditRow.isEdit=true;
        const newData=data.map((val)=>{
            if(val.id===id) return toEditRow;
            else return val;
        })
        setDataToEdit(toEditRow);
        setEmployeesData(newData);
        setEmployeesDataCopy(newData);
    }
  
    return (
        <div>
            <table className={styles.table}>
               <thead className={styles.header}>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Action Buttons</th>
               </thead>
               <tbody className={styles.body}>
                    {
                        data && data.map((val)=>{
                            return (
                                <React.Fragment >
                                {
                                    val.isEdit===false ? (
                                    <tr key={val.id}>
                                    <td>{val.firstName}</td>
                                    <td>{val.lastName}</td>
                                    <td>{val.email}</td>
                                    <td><ActionButtons id={val.id} deleteEmployee={deleteEmployee} editEmployeeData={editEmployeeData} isEdit={val.isEdit}/></td>
                                   </tr>
                                    ) : <Edit key={val.id} setEmployeesData={setEmployeesData} isEdit={val.isEdit} setEmployeesDataCopy={setEmployeesDataCopy} data={data} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} id={val.id}/>
                                }
                                </React.Fragment>
                            )
                        })
                    }
               </tbody>
            </table>
        </div>
    )
}