import React , {useEffect} from "react";
import {useLocation} from 'react-router-dom';
import { Routes, Route, useNavigate } from "react-router-dom";


import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Typography from '@mui/material/Typography';
import Card from "@mui/material/Card";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import {MainTitle,SubTitle} from "../../components/SimpleTitle";

export default function AddSalary(){
    document.title = "Add Salary";
    
    const location = useLocation();
    const emp_id = location.state.emp_id;

    const navigate = useNavigate();

    console.log('emp_id',emp_id);

    const moment = require('moment');

    const [leaveType,setLeaveType] = React.useState('');
    const selectLeaveType = (event) => {
        setLeaveType(event.target.value);
    }

    const [salaryDate, setsalaryDate] = React.useState(null);

    


    const [leaveDescr, setLeaveDescr] = React.useState('');
    const addLeaveDescr = (event) => {
        setLeaveDescr(event.target.value);
    };

    const [salBasic, setBasic] = React.useState('');
    const addBasic = (event) => {
        setBasic(event.target.value);
    };


    const [salTax, setTax] = React.useState('');
    const addTax = (event) => {
        setTax(event.target.value);
    };

    const [salDeductions, setDeductions] = React.useState('');
    const addDeductions = (event) => {
        setDeductions(event.target.value);
    };
    
    const [salAllowance, setAllowance] = React.useState('');
    const addAllowance = (event) => {
        setAllowance(event.target.value);
    };
  
  

       // when applying for leave
       const apply_for_leave = () => {

        const add_salary_obj = [];
        add_salary_obj.emp_id = emp_id;
        add_salary_obj.salBasic = salBasic;
        add_salary_obj.salTax = salTax;
        add_salary_obj.salDeductions = salDeductions;
        add_salary_obj.salAllowance = salAllowance;
        add_salary_obj.leave_type = leaveType;
        add_salary_obj.salaryDate = salaryDate.format('M YYYY');
        add_salary_obj.leave_descr = leaveDescr;

        console.log(add_salary_obj);
        

    }
    
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
                    height: 'auto',
                    
                    }}
                >
                    <SubTitle title="Add Sallary" />
                    
                    <React.Fragment >
                        <FormControl fullWidth sx={{mb:1 , mt:1}}>
                            <InputLabel id="demo-simple-select-label">Salary Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={leaveType}
                                label="Age"
                                onChange={ selectLeaveType }
                            >
                                <MenuItem value={"Annual"}>1st Half</MenuItem>
                                <MenuItem value={"Casual"}>2nd Half</MenuItem>
                                <MenuItem value={"Casual"}>Full Salary</MenuItem>
                            </Select>
                        </FormControl>
                        
                        <FormControl fullWidth sx={{mb:1 , mt:1}}>
                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <DatePicker
                                    label="Month"
                                    value={salaryDate}
                                    views={['year', 'month']}
                                    onChange={(newsalaryDate) => {
                                        let formatted_to_date = moment(new Date(newsalaryDate));
                                        // formatted_to_date.format('DD MM YYYY');
                                        setsalaryDate(formatted_to_date);
                                    }}
                                    renderInput={(params) =>  <TextField {...params} helperText={null} />}
                                />
                            </LocalizationProvider>
                        </FormControl>

                        <FormControl fullWidth sx={{mb:1 , mt:1}}>
                            <TextField type="number" value={salBasic} onChange={ addBasic } id="outlined-basic" label="Basic" variant="outlined" sx={{mb:1}} inputProps={{maxLength: 20,step: "3"}}/>
                        </FormControl>
                        
                        <FormControl fullWidth sx={{mb:1 , mt:1}}>
                            <TextField type="number" value={salTax} onChange={ addTax } id="outlined-tax" label="Tax" variant="outlined" sx={{mb:1}} inputProps={{maxLength: 20,step: "3"}}/>
                        </FormControl>
                        
                        <FormControl fullWidth sx={{mb:1 , mt:1}}>
                            <TextField type="number" value={salDeductions} onChange={ addDeductions } id="outlined-deductions" label="Deductions" variant="outlined" sx={{mb:1}} inputProps={{maxLength: 20,step: "3"}}/>
                        </FormControl>
                        
                        <FormControl fullWidth sx={{mb:1 , mt:1}}>
                            <TextField type="number" value={salAllowance} onChange={ addAllowance } id="outlined-allowance" label="Allowance" variant="outlined" sx={{mb:1}} inputProps={{maxLength: 20,step: "3"}}/>
                        </FormControl>

                        <FormControl fullWidth sx={{mb:1 , mt:1}}>
                            <TextField value={leaveDescr} onChange={ addLeaveDescr } id="outlined-basic" label="Description" variant="outlined" sx={{mb:1}} />
                        </FormControl>

                        <FormControl fullWidth sx={{mb:1 , mt:1}}>
                            <Button variant="contained" onClick={ apply_for_leave }>Submit</Button>
                        </FormControl>


                    </React.Fragment>
                    
                    
                    
                
                </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 'auto',
                        maxHeight : '80vh',
                        overflowY: 'scroll'
                    }}
                >
                    <SubTitle title="User's Salary history"/>
                    <React.Fragment >
                        <Alert severity="info" sx={{ mb: 1 }}>
                            <AlertTitle>Info</AlertTitle>This is an info alert — <strong>check it out!</strong>
                        </Alert>
                        <Alert severity="info" sx={{ mb: 1 }}>
                            <AlertTitle>Info</AlertTitle>This is an info alert — <strong>check it out!</strong>
                        </Alert>
                        <Alert severity="info" sx={{ mb: 1 }}>
                            <AlertTitle>Info</AlertTitle>This is an info alert — <strong>check it out!</strong>
                        </Alert>
                        <Alert severity="info" sx={{ mb: 1 }}>
                            <AlertTitle>Info</AlertTitle>This is an info alert — <strong>check it out!</strong>
                        </Alert>
                        <Alert severity="info" sx={{ mb: 1 }}>
                            <AlertTitle>Info</AlertTitle>This is an info alert — <strong>check it out!</strong>
                        </Alert>
                        <Alert severity="info" sx={{ mb: 1 }}>
                            <AlertTitle>Info</AlertTitle>This is an info alert — <strong>check it out!</strong>
                        </Alert>
                        <Alert severity="info" sx={{ mb: 1 }}>
                            <AlertTitle>Info</AlertTitle>This is an info alert — <strong>check it out!</strong>
                        </Alert>
                        <Alert severity="info" sx={{ mb: 1 }}>
                            <AlertTitle>Info</AlertTitle>This is an info alert — <strong>check it out!</strong>
                        </Alert>
                        <Alert severity="info" sx={{ mb: 1 }}>
                            <AlertTitle>Info</AlertTitle>This is an info alert — <strong>check it out!</strong>
                        </Alert>
                        <Alert severity="info" sx={{ mb: 1 }}>
                            <AlertTitle>Info</AlertTitle>This is an info alert — <strong>check it out!</strong>
                        </Alert>
                        <Alert severity="info" sx={{ mb: 1 }}>
                            <AlertTitle>Info</AlertTitle>This is an info alert — <strong>check it out!</strong>
                        </Alert>
                    </React.Fragment>
                    
                
                </Paper>
            </Grid>
        </React.Fragment>
    )
}