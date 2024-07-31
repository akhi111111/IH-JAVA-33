package com.ihub.www.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.ihub.www.exception.ResoureNotFoundException;
import com.ihub.www.model.Employee;
import com.ihub.www.repository.EmployeeRepository;
@Service
public class EmployeeService {
	
	@Autowired
	EmployeeRepository employeeRepository;

	  public  List<Employee> getAllEmployees(){
		  
		   return employeeRepository.findAll();
	  }
	  
	  public Employee postEmployeeDetails(Employee employee) {
		  
		  return employeeRepository.save(employee);
	  }
	  
	   public Employee getElementById(long id){
		 return  employeeRepository.findById(id).orElseThrow(()-> new ResoureNotFoundException("ID Does not Exist"));
	}
	   
	   
	    public ResponseEntity<Employee> updateEmployee( long id, Employee employee){
	    	
	    	
	    	  Employee emp= employeeRepository.findById(id).orElseThrow( ()-> new ResoureNotFoundException("ID DOEST NOT EXIT"));
	    	   
	    	  emp.setFirstName(employee.getFirstName());
	    	  emp.setLastName(employee.getLastName());
	    	  emp.setEmail(employee.getEmail());
	    	  
	    	  Employee newEmpl=employeeRepository.save(emp);
	    	  
	    	  return ResponseEntity.ok(newEmpl);
	    	   
	    }
	    
	 
	     public ResponseEntity<HttpStatus> deleteEmployee(long id){
	    	 
	    	 Employee employee=employeeRepository.findById(id).orElseThrow(()-> new ResoureNotFoundException("Id Does not Exit"));  
	    	 employeeRepository.delete(employee);
	    	 
	    	 
	    	 return  new ResponseEntity<>(HttpStatus.NO_CONTENT);
	     }


	}

