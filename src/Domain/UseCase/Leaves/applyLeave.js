import { repo_applyLeave } from "../../../Data/Repository/LeaveRepo";

export async function domain_applyLeave(leave_node) {
    return await repo_applyLeave(leave_node)
}