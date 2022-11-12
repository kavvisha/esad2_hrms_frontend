import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

// import views from Presentation/Views
import Leaves from './Presentation/Views/Leaves/Leaves';
import Salaries from './Presentation/Views/Salaries/Salaries';
import AddSalary from './Presentation/Views/AddSalary/AddSalary';
import ViewSalaries from './Presentation/Views/ViewSalaries/ViewSalaries';
import ApplyLeave from './Presentation/Views/ApplyLeave/ApplyLeave';
import Dashboard from './Presentation/Views/Dashboard/Dashboard';
import Sidebar from './Presentation/components/Sidebar';


// const mdTheme = createTheme();
const mdTheme = createTheme({
  typography: {
   "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
   "fontSize": 14,
   "fontWeightLight": 300,
   "fontWeightRegular": 400,
   "fontWeightMedium": 500
  }
});

function App() {

  return (
    <ThemeProvider theme={mdTheme}>
       <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        
        <Sidebar />

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          
          <Container maxWidth="100%" sx={{ mt: 10, mb: 4 }}>
            <Grid container spacing={3}>
              
              
                  <BrowserRouter>
                    <Routes>
                      <Route path="/" element={<Dashboard />}/>
                      <Route path={"/leaves"} element={<Leaves/>}/>
                      <Route path={"/leaves/applyleave"} element={<ApplyLeave/>}/>
                      <Route path={"/salaries"} element={<Salaries/>}/>
                      <Route path={"/salaries/view"} element={<ViewSalaries/>}/>
                      <Route path={"/salaries/addsalary"} element={<AddSalary/>}/>
                    </Routes>
                  </BrowserRouter>
               
            </Grid>
          </Container>
        </Box>
       </Box>
   

    </ThemeProvider>
  );
}

export default App;
