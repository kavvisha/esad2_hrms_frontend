import { getEmployeeById , getAllEmployees } from "../DataSource/EmployeeEndpoint";

export async function getEmp(emp_id){
    const {result , error } = await getEmployeeById(emp_id);
    return {result,error};
}

export async function getEmps(){
    const {result,error} = await getAllEmployees();
    return {result,error};
}