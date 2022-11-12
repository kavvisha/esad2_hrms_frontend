// get all leaves for manager 
export function getManagerDashboardLeaves(){
    fetch('https://740j0t1wub.execute-api.us-east-1.amazonaws.com/dev/leave')
    .then((response) => response.json())
    .then((data) => {
        return Promise.resolve({ error: null, result: data });
    })
    .catch((err) => {
        console.log(err.message);
        return Promise.resolve({ error: err.message, result: null });
    });
}

// get leave details by id 
export function getLeaveById(leave_id){
    fetch('https://740j0t1wub.execute-api.us-east-1.amazonaws.com/dev/leave?id='+leave_id)
    .then((response) => response.json())
    .then((data) => {
        return Promise.resolve({ error: null, result: data });
    })
    .catch((err) => {
        console.log(err.message);
        return Promise.resolve({ error: err.message, result: null });
    });
}

// apply for leave 
export function applyLeave(leave_node){
    fetch('https://740j0t1wub.execute-api.us-east-1.amazonaws.com/dev/leave',
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: leave_node
    })
    .then((response) => response.json())
    .then((data) => {
        return Promise.resolve({ error: null, result: data });
    })
    .catch((err) => {
        console.log(err.message);
        return Promise.resolve({ error: err.message, result: null });
    });
}

// update leave
export function updateLeave(leave_node){
    fetch('https://740j0t1wub.execute-api.us-east-1.amazonaws.com/dev/leave',
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: leave_node
    })
    .then((response) => response.json())
    .then((data) => {
        return Promise.resolve({ error: null, result: data });
    })
    .catch((err) => {
        console.log(err.message);
        return Promise.resolve({ error: err.message, result: null });
    });
}

// get individual leave detail by employee
export function getLeaveDetails(emp_id){
    fetch('https://740j0t1wub.execute-api.us-east-1.amazonaws.com/dev/leave?empId='+emp_id,
    {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
    .then((response) => response.json())
    .then((data) => {
        
        console.log('emp_id', emp_id);
        console.log('get leave data',data);
        return Promise.resolve({ error: null, result: data });
    })
    .catch((err) => {
        console.log(err.message);
        return Promise.resolve({ error: err.message, result: null });
    });
}
