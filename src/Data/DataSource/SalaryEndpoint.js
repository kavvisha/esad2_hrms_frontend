// get all Employee Salaries 
export function getAllEmpSalaries(emp_id){
    fetch('https://xm3e5msswl.execute-api.us-east-1.amazonaws.com/dev/salary?empId='+emp_id)
    .then((response) => response.json())
    .then((data) => {
        setEmployees(data);
        return Promise.resolve({ error: null, result: response_return });
    })
    .catch((err) => {
        console.log(err.message);
        return Promise.resolve({ error: err.message, result: null });
    });
}

// add salary to employee
export function AddSalary(salary_node){
    fetch('https://xm3e5msswl.execute-api.us-east-1.amazonaws.com/dev/salary',
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: salary_node
    })
    .then((response) => response.json())
    .then((data) => {
        setEmployees(data);
        return Promise.resolve({ error: null, result: response_return });
    })
    .catch((err) => {
        console.log(err.message);
        return Promise.resolve({ error: err.message, result: null });
    });
}

// update salary of employee
export function UpdateSalary(salary_node){
    fetch('https://xm3e5msswl.execute-api.us-east-1.amazonaws.com/dev/salary',
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: salary_node
    })
    .then((response) => response.json())
    .then((data) => {
        setEmployees(data);
        return Promise.resolve({ error: null, result: response_return });
    })
    .catch((err) => {
        console.log(err.message);
        return Promise.resolve({ error: err.message, result: null });
    });
}