import React from 'react'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';

export default function CreateEmployeesComponent() {

    const navigate=useNavigate();

    const [employee,setEmployee]=useState (
        {
            firstName:"",
            lastName:"",
            email:""
            
        }

     )
        const  eventHnadler=(e)=>{
        const name=e.target.name;
        const value=e.target.value;

        setEmployee({...employee,[name]:value});

       }
    
     const saveHandler=(e)=>{

        e.preventDefault();

         EmployeeService.postEmployee(employee).then((res)=>{

            navigate("/employee");
               
         })
     }

     const cancelHandler=()=>{

        navigate("/employee");

     }

    
  return (
    <div className="container mt-3 pt-5">
        <div className="card w-50 offset-md-3 mt-5">
            <h3 className="text-center text-info">Add Employee</h3>
            <div className="card-body ">
                  <form >

                    <div className="form-group my-3">

                        <label>Frist Name : </label>
                        <input type="text" id="firstName" requrired  name="firstName" className="form-control" autoCompleted="off" value={employee.firstName}
                        
                        onChange={eventHnadler} />

                    </div>

                    <div className="form-group my-3">

                      <label>Last Name : </label>
                        < input type="text" id="lastName" name="lastName"   className="form-control" autoCompleted="off" value={employee.lastName}
                        
                        onChange={eventHnadler}/>

                </div>


                <div className="form-group my-3">

                    <label> Email : </label>
                    <input type="text" id="email" name="email"   className="form-control" autoCompleted="off" value={employee.email}
                    
                    onChange={eventHnadler}/>

                      </div>

                      <button className="btn btn-primary float-start" onClick={saveHandler}>Save</button>
                      <button className="btn btn-success float-end" onClick={cancelHandler}>Cancel</button>
                  </form>

            </div>


        </div>
             
    </div>
  )
}
