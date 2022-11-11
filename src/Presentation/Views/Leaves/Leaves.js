import React , {useEffect} from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Typography from '@mui/material/Typography';


import {MainTitle,SubTitle} from "../../components/SimpleTitle";



export function Show_all_employees_leaves(){
    
    const navigate = useNavigate();
    const return_all_employess = [];

    for(var i = 0 ; i < 10 ; i++){
        let temp = i;
        return_all_employess.push(
            <Alert key={i} severity="info" sx={{ mb: 1 ,cursor:'pointer'}} onClick = { () => {navigate('/leaves/applyleave',{state:{emp_id:temp}})}}> 
                <AlertTitle>{'Info '+i}</AlertTitle>
                This is an info alert — <strong>check it out!</strong>
            </Alert>
        );
    }
    return ( <Card style={{overflow: 'auto'}}>{return_all_employess}</Card>);
}


export default function Leaves(){
    document.title = "Leaves";
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

                    <Show_all_employees_leaves />
                
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