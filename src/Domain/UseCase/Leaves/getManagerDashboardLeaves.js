import { repo_getManagerDashboardLeaves } from "../../../Data/Repository/LeaveRepo";

export async function domain_getManagerDashboardLeaves() {
    return await repo_getManagerDashboardLeaves()
}