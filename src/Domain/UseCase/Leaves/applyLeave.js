import { repo_applyLeave } from "../../../Data/Repository/LeaveRepo";

export async function domain_applyLeave(id) {
    return await repo_applyLeave(id)
}