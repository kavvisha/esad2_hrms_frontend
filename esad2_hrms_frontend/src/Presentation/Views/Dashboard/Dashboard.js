import React , {useEffect} from "react";

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Typography from '@mui/material/Typography';

import {MainTitle,SubTitle} from "../../components/SimpleTitle";

export default function Dashboard(){
    document.title = "Dashboard";
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
                     <Typography
                        component="h1"
                        variant="h6"                        
                        color="inherit"
                        style={ {textAlign : 'left'}}
                        sx={{ fontWeight: 600, mb:1,}}
                    >
                        {'Overview'}
                    </Typography>

                    <Alert severity="info" sx={{ mb: 1 }}>
                        <AlertTitle>Info</AlertTitle>This is an info alert — <strong>check it out!</strong>
                    </Alert>
                    <Alert severity="info" sx={{ mb: 1 }}>
                        <AlertTitle>Info</AlertTitle>This is an info alert — <strong>check it out!</strong>
                    </Alert>
                    <Alert severity="info" sx={{ mb: 1 }}>
                        <AlertTitle>Info</AlertTitle>This is an info alert — <strong>check it out!</strong>
                    </Alert>
                
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
                    <Typography
                        component="h1"
                        variant="h6"                        
                        color="inherit"
                        style={ {textAlign : 'left'}}
                        sx={{ fontWeight: 600, mb:1,}}
                    >
                        {'Alerts'}
                    </Typography>

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