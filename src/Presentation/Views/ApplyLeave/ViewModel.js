import { useState } from "react";

import { domain_applyLeave } from "../../../Domain/UseCase/Leaves/applyLeave";
import { domain_getLeaveById } from "../../../Domain/UseCase/Leaves/getLeaveById";
import { domain_getLeaveDetails } from "../../../Domain/UseCase/Leaves/getLeaveDetails";
import { domain_getManagerDashboardLeaves } from "../../../Domain/UseCase/Leaves/getManagerDashboardLeaves";
import { domain_updateLeave } from "../../../Domain/UseCase/Leaves/updateLeave";

export default function ApplyLeaveModel(){
    const [error, setError] = useState("");
    const [values, setValues] = useState({});

    const [emp_leaves,set_emp_leaves] = useState([]);

    function applyNewVals(value,prop){
        setValues({...values, [prop]:value });
        console.log('values',values);
        // console.log(values+' '+prop+' '+value);
    }

    async function apply_for_leave(){
        const moment = require('moment');        

        let selectedEmp = JSON.parse(window.localStorage.getItem('active_user'));
        let fromdt = moment(new Date(values.fromDate));
        let todt = moment(new Date(values.to_Date));
        let diff =  todt.diff(fromdt, 'days');

        const apply_for_leave_obj = {
            empId: selectedEmp['id'],
            toDate: values.to_Date,
            fromDate: values.fromDate,
            duration: 2,
            type: values.type,
            description: values.description
        }
        console.log('apply_for_leave_obj',apply_for_leave_obj);
        const {result,error} = await domain_applyLeave(JSON.stringify(apply_for_leave_obj));
        setError(error)
        console.log('result',result);
        console.log('error',error);
    }
  
    async function update_leave(){
        const moment = require('moment');

        let selectedEmp = JSON.parse(window.localStorage.getItem('active_user'));
        let fromdt = moment(new Date(values.fromDate));
        let todt = moment(new Date(values.to_Date));
        let diff =  todt.diff(fromdt, 'days');

        const apply_for_leave_obj = {
            empId: selectedEmp['id'],
            toDate: values.to_Date,
            fromDate: values.fromDate,
            duration: 2,
            type: values.type,
            description: values.description
        }
        console.log('apply_for_leave_obj',apply_for_leave_obj);
        const {result,error} = await domain_updateLeave(JSON.stringify(apply_for_leave_obj));
        setError(error)
        console.log('result',result);
        console.log('error',error);

    }

    async function get_emp_all_leave_details(){
        let selectedEmp = JSON.parse(window.localStorage.getItem('active_user'));
        const result = await domain_getLeaveDetails(selectedEmp['id']);
        setError(error)
        set_emp_leaves(result);
        console.log(result);
        
    }

    return{
        ...values,
        error,
        apply_for_leave,
        update_leave,
        get_emp_all_leave_details,
        applyNewVals,
    }
    
}