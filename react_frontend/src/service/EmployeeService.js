import axios from  'axios';

const EMPLOYEE_API_BASE_URL="http://localhost:9191/api/v1/employee";


class EmployeeService
{
 
      getEmplyees(){

          return axios.get(EMPLOYEE_API_BASE_URL);
      }

      postEmployee(employee){

            return axios.post(EMPLOYEE_API_BASE_URL,employee);
      }
      getEmployeeById(id){

            return axios.get(EMPLOYEE_API_BASE_URL+'/'+id);
      }
      updateEmployee(id,employee){

            return axios.put(EMPLOYEE_API_BASE_URL+'/'+id,employee);
      }

      deleteEmployee(id){


              return axios.delete(EMPLOYEE_API_BASE_URL+'/'+id)
      }

}

export default new EmployeeService();