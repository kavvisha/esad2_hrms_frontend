import { getEmps } from "../../../Data/Repository/EmployeeRepo";

export async function GetAllEmployees(){
    return await getEmps();
}
// getEmp(emp_id)
// getEmps