import React , {useEffect} from "react";
import {useLocation} from 'react-router-dom';

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

import useViewModel from "./ViewModel";

import {MainTitle,SubTitle} from "../../components/SimpleTitle";

export default function ApplyLeave(){
    // const location = useLocation();

    // const emp_id = location.state.emp_id;
    document.title = "Apply Leave";

    const moment = require('moment');

    const [leaveType,setLeaveType] = React.useState('');
    const selectLeaveType = (event) => {
        setLeaveType(event.target.value);
    }
    const [fromDate, setFromDate] = React.useState(null);
    const [toDate, setToDate] = React.useState(null);

    const [leaveDescr, setLeaveDescr] = React.useState('');
    const addLeaveDescr = (event) => {
        setLeaveDescr(event.target.value);
    };

    // when applying for leave
    const apply_for_leave = () => {
        const apply_for_leave_obj = [];
        apply_for_leave_obj.leave_type = leaveType;
        apply_for_leave_obj.from_date = fromDate._d;
        apply_for_leave_obj.to_date = toDate._d;
        apply_for_leave_obj.leave_descr = leaveDescr;
        apply_for_leave_obj.date_diff = toDate.diff(fromDate, 'days');

        console.log(apply_for_leave_obj);
        

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
                    <SubTitle title="Request Leave" />
                    
                    <React.Fragment >
                        <FormControl fullWidth sx={{mb:1 , mt:1}}>
                            <InputLabel id="demo-simple-select-label">Leave Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={leaveType}
                                label="Age"
                                onChange={ selectLeaveType }
                            >
                                <MenuItem value={"Annual"}>Annual</MenuItem>
                                <MenuItem value={"Casual"}>Casual</MenuItem>
                                <MenuItem value={"Sick"}>Sick</MenuItem>
                                <MenuItem value={"Halfday"}>Halfday</MenuItem>
                                <MenuItem value={"No Pay"}>No Pay</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth sx={{mb:1 , mt:1}}>
                            <LocalizationProvider dateAdapter={AdapterDayjs} sx={{mb:10}}>
                                <DatePicker
                                    label="From"
                                    value={fromDate}
                                    onChange={(newFromDate) => {
                                        let formatted_from_date = moment(new Date(newFromDate));
                                        // formatted_from_date.format('LL');
                                        setFromDate(formatted_from_date);
                                    }}
                                    
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </FormControl>

                        <FormControl fullWidth sx={{mb:1 , mt:1}}>
                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <DatePicker
                                    label="To"
                                    value={toDate}
                                    onChange={(newToDate) => {
                                        let formatted_to_date = moment(new Date(newToDate));
                                        // formatted_to_date.format('DD MM YYYY');
                                        setToDate(formatted_to_date);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </FormControl>

                        <FormControl fullWidth sx={{mb:1 , mt:1}}>
                            <TextField value={leaveDescr} onChange={ addLeaveDescr } id="outlined-basic" label="Description" variant="outlined" sx={{mb:1}}/>
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
                    
                    }}
                >
                    <SubTitle title="Entitlement"/>
                    <React.Fragment >
                        <Box sx={{ width: '100%' , mt : 2, mb : 2}}>
                            <Typography>Annual 4/14</Typography>
                            <LinearProgress variant="determinate" value={(4/14)*100} />
                        </Box>
                        <Box sx={{ width: '100%' , mb : 2}}>
                            <Typography>Casual 5/10</Typography>
                            <LinearProgress variant="determinate" value={(5/10)*100} />
                        </Box>
                        <Box sx={{ width: '100%' , mb : 2}}>
                            <Typography>Sick 2/10</Typography>
                            <LinearProgress variant="determinate" value={(2/10)*100} />
                        </Box>
                        <Box sx={{ width: '100%' , mb : 2}}>
                            <Typography>Halfday 2/5</Typography>
                            <LinearProgress variant="determinate" value={(2/5)*100} />
                        </Box>
                        <Box sx={{ width: '100%' , mb : 5}}>
                            <Typography>NoPay 10/10</Typography>
                            <LinearProgress variant="determinate" value={(10/10)*100} />
                        </Box>
                        
                    </React.Fragment>
                    <Divider sx={{mb:3}}/>  
                    <SubTitle title="Requested Leaves"/>
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
                    </React.Fragment>
                    
                
                </Paper>
            </Grid>
        </React.Fragment>
    )
}