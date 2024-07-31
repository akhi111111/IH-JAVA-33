import React, { Component } from 'react'
import EmployeeService from '../service/EmployeeService';
import {Link} from 'react-router-dom';


 class ListEmployeeComponent extends Component {

          constructor(props){

              super(props);

              this.state={

                        employee:[]  
               }
          }

          componentDidMount(){

             EmployeeService.getEmplyees().then((response)=>{
      
                   this.setState({employee:response.data})
             })

            }

            deleteEmployee=(id)=>{

                  EmployeeService.deleteEmployee(id).then((res)=>{

                      
                       EmployeeService.getEmployeeById().then((res)=>{
                               
                        this.setState({employee:res.data});

                       })
                  })
                  .catch((error)=>{

                     console.log(error);
                  })

            }
         
  render()
   {
    return (
      <div className="container mt-5 ">
        <h3 className="text-center text-warning pt-3">Employee Deatils</h3>
        <div className="container mt-5">
           <div className="row">
            <Link to="/add-employee" className="btn btn-outline-success w-100%  rounded-5 mb-3" >Add Employee</Link>
            <table className="table table-bordered ">
                <thead>
                    <tr>

                         <th>ID</th>
                         <th>FRISTNAME</th>
                         <th>LASTNAME</th>
                         <th>EMAIL</th>
                         <th>ACTION</th>
                    </tr>
                    </thead>
                    <tbody>
                          {

                               this.state.employee.map((emp)=>

                                          <tr key={emp.id}>
                                               <td>{emp.id}</td>
                                               <td>{emp.firstName}</td>
                                               <td>{emp.lastName}</td>
                                               <td>{emp.email}</td>
                                               <td>
                               
                    <Link to={`/update-employee/${emp.id}`} className="btn btn-primary">Update</Link>
                    <button className="btn btn-danger" style={{marginLeft:"15px"}}
                    
                     onClick={()=> this.deleteEmployee(emp.id)} > Delete</button>

                                               </td>
                                           </tr>

                               )
                          }
                    </tbody>
                


            </table>
            </div>

        </div>


      </div>
    )
  }
}
 export default ListEmployeeComponent;
