import React , {useState,useEffect} from "react";
import  {styled, createTheme, ThemeProvider} from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DateRangeIcon from '@mui/icons-material/DateRange';
import MoneyIcon from '@mui/icons-material/Money';

const drawerWidth = 240;
const  emptype = 4;



const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
          },
        }),
      },
    }),
);

const mainListItems = (
  
  <React.Fragment>
    <ListItemButton to="/">
        <ListItemIcon>
            <DashboardIcon />
        </ListItemIcon>
        <ListItemText>Dashboard</ListItemText>
    </ListItemButton>

    <ListItemButton to={ (emptype > 1) ? "/leaves/applyleave" : "/leaves"}>
        <ListItemIcon>
            <DateRangeIcon />
        </ListItemIcon>
        <ListItemText>Leaves</ListItemText>
    </ListItemButton>

    <ListItemButton to="/salaries">
        <ListItemIcon>
            <MoneyIcon />
        </ListItemIcon>
        <ListItemText>Salaries</ListItemText>
    </ListItemButton>
  

    
</React.Fragment>
);

export function Test_apis(){
  const [posts, setPosts] = useState([]);
  useEffect(() => {
     fetch('https://740j0t1wub.execute-api.us-east-1.amazonaws.com/dev/leave?empId=3')
        .then((response) => response.json())
        .then((data) => {
           console.log(data);
           setPosts(data);
        })
        .catch((err) => {
           console.log(err.message);
        });
  }, []);
  console.log(posts);
}

export default function Sidebar(){
  
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
      setOpen(!open);
    };

    // for the employees dropdown selection
    const [employees, setEmployees] = useState([]);
    const [selected_emp,setSelectedEmployee] = React.useState('');
    const selectEmployeeToUI = (event) => {
      let emp_select = event.target.value;
      setSelectedEmployee(emp_select);
      employees.forEach(element => {
        console.log(element);
        if(element['id'] == emp_select){
          window.localStorage.setItem('active_user',JSON.stringify(element));
        }
      });
    }
  
    useEffect(() => {
      // set selected user on page load
      let selectedEmp = JSON.parse(window.localStorage.getItem('active_user'));
      if(selectedEmp) {
        setSelectedEmployee(selectedEmp['id']);
      }
      
      fetch('https://dfguqaaet4.execute-api.us-east-1.amazonaws.com/dev/employee')
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data);
      })
      .catch((err) => {
          console.log(err.message);
      });
    }, []);

    return(
        <React.Fragment>
            {/* {Test_apis()} */}
            <Drawer variant="permanent" open={open}>
                <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    px: [1],
                }}
                >
                <IconButton onClick={toggleDrawer}>
                    <ChevronLeftIcon />
                </IconButton>
                </Toolbar>
                <Divider />
                <List component="nav">
                {mainListItems}
                <Divider sx={{ my: 1 }} />
            
                </List>
            </Drawer>
            <AppBar style={{ background: '#2E3B55' }} position="absolute" open={open}>
                <Toolbar
                sx={{
                    pr: '24px', // keep right padding when drawer closed
                }}
                >
                
                <FormControl sx={{mb:2 , mt:2 , width:'200px', background:'white', outline:'none'}}>
                  <InputLabel id="selectEmployeeLabel">Select Employee</InputLabel>
                  <Select
                      labelId="selectEmployeeLabel"
                      id="selectEmployee"
                      value={selected_emp}
                      label="Age"
                      onChange={ selectEmployeeToUI }
                  >
                      {employees.map( (employee) => (
                          <MenuItem key={employee.id} value={employee.id}>{employee.fname+' '+employee.lname}</MenuItem>
                      ))}

                  </Select>
              </FormControl>


                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer}
                    sx={{
                    marginRight: '36px',
                    ...(open && { display: 'none' }),
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    style={ {textAlign : 'right'}}
                    sx={{ flexGrow: 1 }}
                >
                    {'Hello Manager'}
                </Typography>
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                    <NotificationsIcon />
                    </Badge>
                </IconButton>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}