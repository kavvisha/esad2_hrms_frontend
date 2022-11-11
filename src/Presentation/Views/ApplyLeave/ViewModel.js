import { useState } from "react";

import { domain_applyLeave } from "../../../Domain/UseCase/Leaves/applyLeave";
import { domain_getLeaveById } from "../../../Domain/UseCase/Leaves/getLeaveById";
import { domain_getLeaveDetails } from "../../../Domain/UseCase/Leaves/getLeaveDetails";
import { domain_getManagerDashboardLeaves } from "../../../Domain/UseCase/Leaves/getManagerDashboardLeaves";
import { domain_updateLeave } from "../../../Domain/UseCase/Leaves/updateLeave";

export default function ApplyLeaveModel(){
    const [error, setError] = useState("");
    const [leave_node, setValues] = useState({
        id: null,
        name: "",
        price: 0
    })

    async function apply_for_leave(leave_node){
        const {result,error} = await domain_applyLeave(leave_node);
        setError(error)
    }

    async function get_emp_all_leave_details(emp_id){
        const {result,error} = await domain_getLeaveDetails(emp_id);
        setError(error)
        setValues({...result})
    }

    return(
        error,
        apply_for_leave,
        get_emp_all_leave_details,
        leave_node
    )
}