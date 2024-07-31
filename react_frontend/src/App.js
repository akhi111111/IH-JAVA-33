import React from 'react'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponen from './components/HeaderComponen';
import FooterComponent from './components/FooterComponent';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CreateEmployeesComponent from './components/CreateEmployeesComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';



   function App() {
  return (
     <div>
    <HeaderComponen/>
      <BrowserRouter>
    <div className="container">
      <Routes>
          <Route exact path="/" element={<ListEmployeeComponent/>}></Route>
          <Route path="/employee" element={<ListEmployeeComponent/>}></Route>
          <Route path="/add-employee" element={<CreateEmployeesComponent/>}></Route>
          <Route path="/update-employee/:id" element={<UpdateEmployeeComponent/>}></Route>

        
          
       </Routes>
    </div>

    </BrowserRouter>
    <FooterComponent/>

    </div>
  )
}
export default App;