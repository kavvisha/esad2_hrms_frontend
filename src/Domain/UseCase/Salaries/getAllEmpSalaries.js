import { repo_getAllEmpSalaries } from "../../../Data/Repository/SalaryRepo"

export async function domain_getAllEmpSalariesapplyLeave(id) {
    return await repo_getAllEmpSalaries(id)
}