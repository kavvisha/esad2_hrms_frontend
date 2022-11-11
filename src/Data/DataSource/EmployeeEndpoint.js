import React, { useState, useEffect } from 'react';


// get employee data by id
export function getEmployeeById(emp_id){
    try {
        let response_return = [];
        fetch('https://ayturwuui6.execute-api.us-east-1.amazonaws.com/test?id='+emp_id)
            .then( (response) => {response_return = response.json()})
        return Promise.resolve({ error: null, result: response_return })
    }
    catch (err){
        return Promise.resolve({ error: err.message, result: null })
    }
        
}

// get all employees 
export function getAllEmployees(){
    try {
        let response_return = [];
        fetch('https://ayturwuui6.execute-api.us-east-1.amazonaws.com/test')
        .then( (response) => {response_return = response.json()})
        
        return Promise.resolve({ error: null, result: response_return })
        
    }
    catch (err){
        return Promise.resolve({ error: err.message, result: null })
    }

}