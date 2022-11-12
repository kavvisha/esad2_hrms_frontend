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
import useViewModel from "./ViewModel";

export default function AddSalary(){
    document.title = "Add Salary";
    
    const location = useLocation();
    let emp_id = location.state.emp_id;

    const navigate = useNavigate();

    console.log('emp_id',emp_id);

    const moment = require('moment');

    let { description, type, basicAmount, taxAmount, deductions, allowance, applyNewVals, add_salary } = useViewModel();
    
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
                                value={type}
                                label="Age"
                                onChange={ (event) => {
                                    // type = event.target.value;
                                    applyNewVals(event.target.value, "type");    
                                } }
                            >
                                <MenuItem value={"First"}>1st Half</MenuItem>
                                <MenuItem value={"Second"}>2nd Half</MenuItem>
                                <MenuItem value={"Full"}>Full Salary</MenuItem>
                            </Select>
                        </FormControl>
                        
                        <FormControl fullWidth sx={{mb:1 , mt:1}}>
                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <DatePicker
                                    label="Month"
                                    value={description}
                                    views={['year', 'month']}
                                    onChange={(newsalaryDate) => {
                                        let formatted_salary_date = moment(new Date(newsalaryDate));
                                        // formatted_salary_date.format('MM YYYY');
                                        applyNewVals(formatted_salary_date, "description")
                                    }}
                                    renderInput={(params) =>  <TextField {...params} helperText={null} />}
                                />
                            </LocalizationProvider>
                        </FormControl>

                        <FormControl fullWidth sx={{mb:1 , mt:1}}>
                            <TextField type="number" 
                            value={basicAmount} 
                            onChange={ (event) => {
                                // basicAmount = event.target.value;
                                applyNewVals(event.target.value, "basicAmount");    
                            } } 
                            id="outlined-basic" label="Basic" variant="outlined" sx={{mb:1}} inputProps={{maxLength: 20,step: "3"}}/>
                        </FormControl>
                        
                        <FormControl fullWidth sx={{mb:1 , mt:1}}>
                            <TextField type="number"
                             value={taxAmount} 
                             onChange={ (event) => {
                                // taxAmount = event.target.value;
                                applyNewVals(event.target.value, "taxAmount");    
                            } } 
                             id="outlined-tax" label="Tax" variant="outlined" sx={{mb:1}} inputProps={{maxLength: 20,step: "3"}}/>
                        </FormControl>
                        
                        <FormControl fullWidth sx={{mb:1 , mt:1}}>
                            <TextField type="number"
                             value={deductions}
                             onChange={ (event) => {
                                // deductions = event.target.value;
                                applyNewVals(event.target.value, "deductions");    
                            } } 
                             id="outlined-deductions" label="Deductions" variant="outlined" sx={{mb:1}} inputProps={{maxLength: 20,step: "3"}}/>
                        </FormControl>
                        
                        <FormControl fullWidth sx={{mb:1 , mt:1}}>
                            <TextField type="number"
                             value={allowance} 
                             onChange={ (event) => {
                                // allowance = event.target.value;
                                applyNewVals(event.target.value, "allowance");    
                            } } 
                             id="outlined-allowance" label="Allowance" variant="outlined" sx={{mb:1}} inputProps={{maxLength: 20,step: "3"}}/>
                        </FormControl>

                        {/* <FormControl fullWidth sx={{mb:1 , mt:1}}>
                            <TextField value={description}
                             onChange={ (event) => {
                                // description = event.target.value;
                                applyNewVals(event.target.value, "description");    
                            } }
                              id="outlined-basic" label="Description" variant="outlined" sx={{mb:1}} />
                        </FormControl> */}

                        <FormControl fullWidth sx={{mb:1 , mt:1}}>
                            <Button variant="contained" onClick={ add_salary }>Submit</Button>
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