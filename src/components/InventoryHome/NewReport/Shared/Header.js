import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles((theme) => ({
    NavTitle:{
        background:"#93227F",
        borderRadius:"0px 0px 20px 20px",
        display:'flex',
        alignItems:"center",
        padding:"0px 20px",
        color:'#F9F3FA',
        height:80
    },
    Title:{
        color:'#F9F3FA',
        textAlign:"center",
        fontSize:'1.3rem',
        fontWeight: 500,
    },
}))

export default function Header(props) {
    const classes = useStyles();
    return (
        <Paper elevation={5} className={classes.NavTitle}>
            <ArrowBackIosIcon onClick={props.onClick}/>
            <h1 className={classes.Title}>{props.Title}</h1>
        </Paper>
    )
}
