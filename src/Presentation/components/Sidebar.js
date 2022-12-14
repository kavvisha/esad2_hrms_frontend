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

let emptype = 4;
let selectedEmpGlobal = JSON.parse(window.localStorage.getItem('active_user'))


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

    <ListItemButton to={ ((selectedEmpGlobal['roleId'] == 2 ) || (selectedEmpGlobal['roleId'] == 3 )) ? "/leaves" : "/leaves/applyleave"}>
        <ListItemIcon>
            <DateRangeIcon />
        </ListItemIcon>
        <ListItemText>Leaves</ListItemText>
    </ListItemButton>

    <ListItemButton to={ ((selectedEmpGlobal['roleId'] == 2 ) || (selectedEmpGlobal['roleId'] == 3 )) ? "/salaries/" : "/salaries/view" } >
        <ListItemIcon>
            <MoneyIcon />
        </ListItemIcon>
        <ListItemText>Salaries</ListItemText>
    </ListItemButton>
  

    
</React.Fragment>
);

function Test_apis(){
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //    fetch('https://xm3e5msswl.execute-api.us-east-1.amazonaws.com/dev/salary?empId=1')
  //       .then((response) => response.json())
  //       .then((data) => {
  //          console.log(data);
  //          setPosts(data);
  //       })
  //       .catch((err) => {
  //          console.log(err.message);
  //       });
  // }, []);
  // console.log(posts);

  // const leave_node = [];
  
  // leave_node.empId = "003";
  // leave_node.toDate = "Fri Nov 02 2022 00:00:00 GMT+0530";
  // leave_node.fromDate = "Fri Nov 02 2022 00:00:00 GMT+0530";
  // leave_node.duration = 0;
  // leave_node.type = "Sick";
  // leave_node.description = "Having fever";
         
            let leave_node = {
              id:"9",
              empId: "003",
              toDate: "Fri Nov 02 2022 00:00:00 GMT+0530",
              fromDate: "Fri Nov 05 2022 00:00:00 GMT+0530",
              duration: 0,
              type: "Sick",
              description: "Having fever"
            }

            leave_node = JSON.stringify(leave_node) ;
            console.log(leave_node);

            // const [posts, setPosts] = useState([]);

            fetch('https://740j0t1wub.execute-api.us-east-1.amazonaws.com/dev/leave',
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: leave_node,
                mode: 'cors'
            })
            .then((response) => response.json())
            .then((data) => {
              console.log('leave put',data);
            })
            .catch((err) => {
              console.log(err.message);
            });
          
            leave_node = {
              empId: "003",
              toDate: "Fri Nov 02 2022 00:00:00 GMT+0530",
              fromDate: "Fri Nov 05 2022 00:00:00 GMT+0530",
              duration: 0,
              type: "Sick",
              description: "Having fever"
            }

            leave_node = JSON.stringify(leave_node) ;
            console.log(leave_node);

            // const [posts, setPosts] = useState([]);

            fetch('https://740j0t1wub.execute-api.us-east-1.amazonaws.com/dev/leave',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: leave_node,
                mode: 'cors'
            })
            .then((response) => response.json())
            .then((data) => {
              console.log('leave post', data);
            })
            .catch((err) => {
              console.log(err.message);
            });
          




        leave_node = {
          description:"September",
          type:"2",
          basicAmount:230000,
          taxAmount:35604.27, 
          deductions:750.03,
          allowance:59006,
          empId:"3"
        }
        let leave_node_str = JSON.stringify(leave_node);
        console.log(leave_node);

        // const [posts, setPosts] = useState([]);
        
        fetch('https://xm3e5msswl.execute-api.us-east-1.amazonaws.com/dev/salary',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: leave_node_str,
          
        })
        .then((response) => response.json())
        .then((data) => {
          // setPosts(data);
          console.log('salary post',data);
        })
        .catch((err) => {
          console.log(err.message);
        });
        // console.log(posts);



        leave_node = {
          id : '9',
          description:"September",
          type:"2",
          basicAmount:230000,
          taxAmount:35604.27, 
          deductions:750.03,
          allowance:59006,
          empId:"3"
        }
        leave_node_str = JSON.stringify(leave_node);
        console.log(leave_node);

        // const [posts, setPosts] = useState([]);
        
        fetch('https://xm3e5msswl.execute-api.us-east-1.amazonaws.com/dev/salary',
        {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: leave_node_str,
          
        })
        .then((response) => response.json())
        .then((data) => {
          // setPosts(data);
          console.log('salary put',data);
        })
        .catch((err) => {
          console.log(err.message);
        });
        // console.log(posts);
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

      window.location.reload(false);
    }
  
    useEffect(() => {

      setTimeout(function(){
        // Test_apis();
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
      },1000)

    }, []);

    return(
        <React.Fragment>
           
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
                
                <FormControl sx={{mb:0 , mt:0, width:'200px', background:'white', outline:'none'}}>
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
                    {'Hello '+selectedEmpGlobal['fname']}
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