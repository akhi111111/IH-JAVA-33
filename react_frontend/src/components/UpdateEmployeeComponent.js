import React from 'react'
import {useState} from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import {useEffect} from 'react';
import EmployeeService from '../service/EmployeeService';
export default function UpdateEmployeeComponent() {

    let navigate=useNavigate();
    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const {id}=useParams();

 
    useEffect(()=>{
         EmployeeService.getEmployeeById(id).then((response)=>{
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmail(response.data.email);
             
         })
         .catch((error)=>{

               console.log("error");
         })
        
    },[]);

  const cancelHandler=()=>{
                
        navigate("/employee");
            

    }

    const updateHandler=()=>{

           const employee={firstName,lastName,email};

           if(id){

              EmployeeService.updateEmployee(id,employee).then((reponse)=>{

                navigate("/employee");
                      
              })
           }
           else{


                   EmployeeService.postEmployee(employee).then((response)=>{

                            
                    navigate("/employee");
                                 
                   })


                   }
           

           
    }


  return (
    <div >
         <div className="container mt-5 pt-5">

            <div className="card w-50 offset-sm-3 ">
               <h3 className="text-center text-warning">UpdateEmployee</h3>
                <div className="card-body">
                    
                         <form>

                            <div className="form-group my-3">
                            <label>Frist Name : </label>
                            <input type="text" name="fristName" className="form-control" autoComplete="off"
                            value={firstName} onChange={(e)=> setFirstName(e.target.value) }/>
                            </div>

                            <div className="form-group my-3">
                            <label>Last Name : </label>
                            <input type="text" name="fristName"  className="form-control"  autoComplete="off"
                              value={lastName} onChange={(e)=> setLastName(e.target.value)}/>
                            </div>

                            <div className="form-group my-3">
                            <label>Email : </label>
                            <input type="text" name="fristName"  className="form-control"  autoComplete="off" 
                              value={email} onChange={(e)=> setEmail(e.target.value)}/>
                            </div>

                            <button className="btn btn-success float-start"
                            
                            onClick={updateHandler}>Save</button>
                            <button  className="btn btn-danger " style={{marginLeft:"15px"}}
                            
                            onClick={cancelHandler}>Clear</button>
                                                     
                            </form>

                </div>


            </div>



         </div>

           
    </div>
  )
}
