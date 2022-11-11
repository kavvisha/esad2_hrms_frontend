import { repo_getLeaveById } from "../../../Data/Repository/LeaveRepo";

export async function domain_getLeaveById(id) {
    return await repo_getLeaveById(id)
}