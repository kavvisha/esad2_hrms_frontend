import React , {Component , useEffect,} from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Typography from '@mui/material/Typography';
import { Card } from "@mui/material";

import {MainTitle,SubTitle} from "../../components/SimpleTitle";

function Show_all_employees_salary(){
    
    const navigate = useNavigate();
    const return_all_employess = [];

    // {employees.map( (employee) => (
    //     return_all_employess.push(
    // // <MenuItem key={employee.id} value={employee.id}>{employee.fname+' '+employee.lname}</MenuItem>
    //     <Alert  key={employee.id} severity="info" sx={{ mb: 1 , cursor:'pointer' }} onClick = { () => {navigate('/salaries/addsalary',{state:{emp_id:employee.id}})}}> 
    //             <AlertTitle>Info</AlertTitle>
    //             This is an info alert — <strong>check it out!</strong>
    //     </Alert>
    //     )
    // ))}


    for(var i = 0 ; i < 10 ; i++){
        let temp = i;
        return_all_employess.push(
            <Alert  key={i} severity="info" sx={{ mb: 1 , cursor:'pointer' }} onClick = { () => {navigate('/salaries/addsalary',{state:{emp_id:temp}})}}> 
                <AlertTitle>Info</AlertTitle>
                This is an info alert — <strong>check it out!</strong>
            </Alert>
        );
    }
    return ( <Card style={{overflow: 'auto'}}>{return_all_employess}</Card>);
}

export default function Salaries(){
    document.title = "Salaries";
    return(
        <React.Fragment>
            <Grid item xs={12} md={12} lg={12}>
                <MainTitle title={document.title} />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <Paper
                    sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '40vh',
                    
                    }}
                >
                    <SubTitle title="Overview"/>

                    {Show_all_employees_salary()}
                
                </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <Paper
                    sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '40vh',
                    }}
                >
                    <SubTitle title="Alerts"/>

                    <Alert severity="warning" sx={{ mb: 1 }}>
                        <AlertTitle>Info</AlertTitle>This is an info alert — <strong>check it out!</strong>
                    </Alert>
                    <Alert severity="warning" sx={{ mb: 1 }}>
                        <AlertTitle>Info</AlertTitle>This is an info alert — <strong>check it out!</strong>
                    </Alert>
                    <Alert severity="warning" sx={{ mb: 1 }}>
                        <AlertTitle>Info</AlertTitle>This is an info alert — <strong>check it out!</strong>
                    </Alert>

                </Paper>
            </Grid>
        </React.Fragment>
    )
}