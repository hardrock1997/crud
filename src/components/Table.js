import styles from '../components/Table.module.css';
import ActionButtons from './ActionButtons';
import React from 'react';

export default function Table({data,dataCopy,setEmployeesData,setEmployeesDataCopy}) {
 
    function deleteEmployee(id) {
        const afterDeletion = dataCopy.filter((val)=>{
            return val.id!==id;
        })
        setEmployeesDataCopy(afterDeletion);
        setEmployeesData(afterDeletion);

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
                                <React.Fragment key={val.id}>
                                <tr>
                                    <td>{val.firstName}</td>
                                    <td>{val.lastName}</td>
                                    <td>{val.email}</td>
                                    <td><ActionButtons id={val.id} deleteEmployee={deleteEmployee}/></td>
                                </tr>
                                
                                </React.Fragment>
                            )
                        })
                    }
               </tbody>
            </table>
        </div>
    )
}