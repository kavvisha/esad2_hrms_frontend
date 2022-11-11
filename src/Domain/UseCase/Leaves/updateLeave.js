import { repo_updateLeave } from "../../../Data/Repository/LeaveRepo";

export async function domain_updateLeave(leave_node) {
    return await repo_updateLeave(leave_node)
}