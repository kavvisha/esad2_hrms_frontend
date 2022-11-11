import React , {useEffect} from "react";
import Typography from '@mui/material/Typography';

export function MainTitle(props){
    return(
        <Typography component="h1"variant="h4"   color="inherit"style={ {textAlign : 'left'}}sx={{ fontWeight: 600, mb:0,}} >{props.title}</Typography>
    )
}
    
export function SubTitle(props){
    return(
        <Typography component="h2"variant="h6"   color="inherit"style={ {textAlign : 'left'}}sx={{ fontWeight: 600, mb:0,}} >{props.title}</Typography>
    )
}