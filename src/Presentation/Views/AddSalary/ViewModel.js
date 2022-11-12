import { useState } from "react";
// import from Domain

import {domain_addSalary} from "../../../Domain/UseCase/Salaries/AddSalary";
import {domain_getAllEmpSalaries} from "../../../Domain/UseCase/Salaries/getAllEmpSalaries";
import {domain_updateSalary} from "../../../Domain/UseCase/Salaries/UpdateSalary";

export default function AddSalaryViewModel(){
    // 

    const [error, setError] = useState("");
    const [values, setValues] = useState({});

    function applyNewVals(value,prop){
        setValues({...values, [prop]:value });
        console.log('values',values);
        // console.log(values+' '+prop+' '+value);
    }

    async function add_salary(){
        let selectedEmp = JSON.parse(window.localStorage.getItem('active_user'));
        const add_salary_object = {
            description: values.description,
            type: values.type,
            basicAmount: values.basicAmount,
            taxAmount: values.taxAmount, 
            deductions: values.deductions, 
            allowance: values.allowance,
            empId: values.empId
        }
        console.log('add_salary_object', add_salary_object);
        const {result,error} = await domain_addSalary(JSON.stringify(add_salary_object));
        setError(error)
        console.log('result',result);
        console.log('error',error);
    }




    return{
        ...values,
        error,
        applyNewVals,
        add_salary,
    }
} 
