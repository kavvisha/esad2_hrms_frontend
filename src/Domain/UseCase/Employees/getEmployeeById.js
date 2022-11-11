import { getEmp } from "../../../Data/Repository/EmployeeRepo";

export async function GetAllEmployees(){
    return await getEmp(emp_id);
}
