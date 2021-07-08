import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import checked from '../../images/newReport.svg'

const useStyles = makeStyles((theme) => ({
    Title:{
        color:'#F9F3FA',
        textAlign:"center",
        fontWeight: 500,
        padding:"30px 0px 0px"
    },
    NewReport:{
        position: 'relative',
        background: 'linear-gradient(114.44deg, #C75DC5 0%, #7433FF 100%)',
        borderRadius:12,
        height: 130,
    },
    CheckedImg:{
        position:'absolute',
        top: 8,
        right: -10
    },
    BottomTittle:{
        position:'absolute',
        bottom: 0,
        left: 16,
        color:"#F9F3FA",
        fontSize:'1.1rem'
    },
    Button:{
        width:'100%',
        background:'#4E444C',
        color:"white",
        padding:10,
        borderRadius:8,
        margin:'20px 0px 25px'
    },
    Title2:{
        color:'#F9F3FA',
        fontWeight: 500,
        margin:0
    },
    
  }));


export default function InventoryHome() {
    const classes = useStyles();
    return (
        <div>
            <h1 className={classes.Title}>Inventory & Condition</h1>
            <Container style={{padding:'0px 21px'}} maxWidth="md">
                <Link to={'/NewReport'}>
                    <Paper elevation={5} className={classes.NewReport} >
                        <p className={classes.BottomTittle}>Start new report</p>
                        <img src={checked} alt="checked" className={classes.CheckedImg}/>
                    </Paper>
                </Link>
                <Button className={classes.Button} elevation={5}>Guidance and Tips</Button>
                <h2 className={classes.Title2}>Previous Reports</h2>
                <Paper elevation={0} className={classes.NewReport} style={{background:"rgba(47, 127, 45, 0.4)", margin:'20px 0px'}}>
                    <p className={classes.BottomTittle}>Active</p>
                </Paper>
                <Paper elevation={0} className={classes.NewReport} style={{background:"#50404D"}}>
                    <p className={classes.BottomTittle}>Completed</p>
                </Paper>
            </Container>
        </div>
    )
}
