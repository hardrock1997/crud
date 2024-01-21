import './App.css';
import AddData from './components/AddData';
import Body from './components/Body';
import {Routes,Route} from 'react-router-dom';
import useFetchData from './hooks/useFetchData';
function App() {
  const [employeesData,setEmployeesData,employeesDataCopy,setEmployeesDataCopy] = useFetchData();

  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Body employeesData={employeesData} setEmployeesData={setEmployeesData} employeesDataCopy={employeesDataCopy} setEmployeesDataCopy={setEmployeesDataCopy} />}/>
          <Route path='/add' element={<AddData setEmployeesData={setEmployeesData} setEmployeesDataCopy={setEmployeesDataCopy}/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
