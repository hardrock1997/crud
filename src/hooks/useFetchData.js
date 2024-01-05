import {useEffect,useState} from 'react';
import { URL } from '../util/constants';
export default function useFetchData() {
    const [employeesData,setEmployeesData] = useState();
    const [employeesDataCopy,setEmployeesDataCopy] = useState();
    useEffect(()=>{
       async function fetchData() {
            const response=await fetch(URL);
            const data=await response.json();
            setEmployeesData(data);
            setEmployeesDataCopy(data);
       }
       fetchData();
    },[])
    return [employeesData,setEmployeesData,employeesDataCopy,setEmployeesDataCopy];
}