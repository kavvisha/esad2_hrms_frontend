import { repo_getLeaveDetails } from "../../../Data/Repository/LeaveRepo";

export async function domain_getLeaveDetails(emp_id) {
    return await repo_getLeaveDetails(emp_id)
}