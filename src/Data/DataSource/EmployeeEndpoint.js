import React, { useState, useEffect } from 'react';


// get employee data by id
export function getEmployeeById(emp_id){
    
    fetch('https://ayturwuui6.execute-api.us-east-1.amazonaws.com/test?id='+emp_id)
    .then((response) => response.json())
    .then((data) => {
        setEmployees(data);
        return Promise.resolve({ error: null, result: response_return });
    })
    .catch((err) => {
        console.log(err.message);
        return Promise.resolve({ error: err.message, result: null });
    });
        
}

// get all employees 
export function getAllEmployees(){
   
    fetch('https://dfguqaaet4.execute-api.us-east-1.amazonaws.com/dev/employee')
    .then((response) => response.json())
    .then((data) => {
        setEmployees(data);
        return Promise.resolve({ error: null, result: response_return });
    })
    .catch((err) => {
        console.log(err.message);
        return Promise.resolve({ error: err.message, result: null });
    });

}