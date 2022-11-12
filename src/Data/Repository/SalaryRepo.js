import { getAllEmpSalaries, AddSalary, UpdateSalary } from "../DataSource/SalaryEndpoint";

export async function repo_getAllEmpSalaries(emp_id){
    const {result, error} = await getAllEmpSalaries(emp_id)();
    return {result,error};
}
export async function repo_AddSalary(salary_node){
    const {result, error} = await AddSalary(salary_node)();
    return {result,error};
}
export async function repo_UpdateSalary(salary_node){
    const {result, error} = await UpdateSalary(salary_node)();
    return {result,error};
}