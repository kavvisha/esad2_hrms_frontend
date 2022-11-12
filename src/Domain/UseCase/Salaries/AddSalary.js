import { repo_AddSalary } from "../../../Data/Repository/SalaryRepo"

export async function domain_addSalary(salary_node) {
    return await repo_AddSalary(salary_node)
}