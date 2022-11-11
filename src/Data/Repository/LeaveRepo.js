import { getManagerDashboardLeaves, getLeaveById, applyLeave, updateLeave, getLeaveDetails } from "../DataSource/LeaveEndpoint";

export async function repo_getManagerDashboardLeaves(){
    const {result, error} = await getManagerDashboardLeaves();
    return {result,error};
}
export async function repo_getLeaveById(leave_id){
    const {result, error} = await getLeaveById(leave_id);
    return {result,error};
}
export async function repo_applyLeave(leave_node){
    const {result, error} = await applyLeave(leave_node);
    return {result,error};
}
export async function repo_updateLeave(leave_node){
    const {result, error} = await updateLeave(leave_node);
    return {result,error};
}
export async function repo_getLeaveDetails(emp_id){
    const {result, error} = await getLeaveDetails(emp_id);
    return {result,error};
}