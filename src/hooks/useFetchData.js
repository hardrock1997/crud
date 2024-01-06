import {useEffect,useState} from 'react';
import { URL } from '../util/constants';
export default function useFetchData() {
  
    const [employeesData,setEmployeesData] = useState([]);
    const [employeesDataCopy,setEmployeesDataCopy] = useState([]);
    function putIsEditProp(data) {
       const newData=data.map((val)=>{
            return (
                {...val,isEdit:false}
            )
        })
        return newData;
    }
    useEffect(()=>{
       async function fetchData() {
            const response=await fetch(URL);
            const data=await response.json();
            const newData=putIsEditProp(data);
            setEmployeesData(newData);
            setEmployeesDataCopy(newData);
       }
       fetchData();
    },[])
    return [employeesData,setEmployeesData,employeesDataCopy,setEmployeesDataCopy];
}