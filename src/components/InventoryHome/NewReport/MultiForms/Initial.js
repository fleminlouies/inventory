import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import {Select, MenuItem }from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Step1 from './Step1';


export default function Initial({callback}) {
    const classes = useStyles();
    const [ select, setSelect ] = useState('');
    const [expanded, setExpanded] = useState('');
    const [open, setOpen] = React.useState(false);

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const nextForm = () => {
        callback(<Step1 callback={callback} />)

    }

    const menuProps = {
        classes: {
            paper: classes.paper,
            list: classes.list
        },
        anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
        },
        transformOrigin: {
            vertical: "top",
            horizontal: "left"
        },
        getContentAnchorEl: null
    };

    const selectForm =(
        <FormControl className={classes.formControl}>
            <Select
                id="demo-mutiple-chip"
                classes={{ root: classes.select, icon: classes.icon, }}
                MenuProps={menuProps}
                disableUnderline
                displayEmpty
                value={select}
                onChange={(e) => {setSelect(e.target.value)}}
            >
                <MenuItem value="" disabled>Select saved property</MenuItem>
                <MenuItem value="Search" >Search</MenuItem>
                <MenuItem value={1} >Item 1</MenuItem>
                <MenuItem value={2} >Item 2</MenuItem>
                <MenuItem value={3} >Item 3</MenuItem>
            </Select>
        </FormControl>
    )

    const beginReport =(
      <div>
        <Dialog onClose={handleClose} open={open} classes={{paper:classes.dialogPaper}}>
          {handleClose ? (
            <IconButton style={{marginLeft:'auto', padding :0}} onClick={handleClose}>
              <CloseIcon style={{color:'#F9F3FA'}}/>
            </IconButton>
          ) : null}
          <p style={{margin: 0}}>You are about to begin your inventory report. </p>
          <p>When you press ‘Begin Report’ and when you sign the report, a time and location stamp will be recorded and added to the final report. Please grant Omnihouse the necessary permissions on your phone.</p>
          <p>This provides information that helps authenticate your account of the Condition and Inventory Report if it was to ever go to dispute.</p>
          <Button className={classes.ButtonInner} onClick={nextForm}>Begin report</Button>
        </Dialog>
      </div>
    )
    return (
        <div>
            <Paper elevation={5} className={classes.NavTitle}>
                <ArrowBackIosIcon/>
                <h1 className={classes.Title}>New Report</h1>
            </Paper>
            <Container style={{padding:'21px'}}>
                <p className={classes.SubTittle}>Select the property</p>
                <div style={{display:"flex", alignItems:"center"}}>
                    {selectForm}
                    <Button className={classes.Button}  elevation={5} 
                        style={{width:"45%", marginLeft:5, background :"#D41553"}}>
                        Add New
                    </Button>
                </div>
                <Button className={classes.Button}  elevation={5}>Inventory</Button>
                <Button className={classes.Button}  elevation={5}>Check in report </Button>
                <Button className={classes.Button}  elevation={5}>interim report </Button>
                <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Button className={classes.Button}  elevation={5}>Check out report </Button>
                    </AccordionSummary>
                    <Button className={classes.ButtonInner}  elevation={5} onClick={()=> setOpen(true)}>Start from scratch</Button>
                    <p className={classes.SubTittle} style={{fontSize:"0.9rem"}}>Select previous report </p>
                    <div style={{display:"flex", alignItems:"center"}}>
                        {selectForm}
                        <Button className={classes.Button}  elevation={5} 
                            style={{width:"45%", marginLeft:5, background :"#D41553"}}>
                            Add New
                        </Button>
                    </div>
                </Accordion>
                {beginReport}
            </Container>
        </div>
    )
}

//End-------------

// styles --------------------------------------------


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
    SubTittle:{
        color:"#F9F3FA",
        fontSize:'0.99rem',
        textTransform:"uppercase"
    },
    Button:{
        width:'100%',
        background:'#4E444C',
        color:"white",
        padding:10,
        borderRadius:8,
        margin:'10px 0px',
        "&:hover":{
            background: "#4E444C",
          },
    },
    ButtonInner:{
        width:'100%',
        background:'rgba(212, 21, 83, 1)',
        color:"white",
        padding:10,
        borderRadius:8,
        margin:'10px 0px',
        "&:hover":{
            background: "rgba(212, 21, 83, 1)",
          },
    },
    select: {
        maxWidth: 150,
        fontSize:"0.9rem",
        borderStyle:'none',
        color:"#F9F3FA",
        padding:0,
      },
    paper: {
        borderRadius: 15,
        marginTop: 20,
        background:'rgba(64, 26, 57, 1)'
    },
    list: {
        paddingTop:0,
        paddingBottom:0,
        fontFamily:"1rem",
        background:'rgba(64, 26, 57, 1)',
        "& li":{
          fontWeight:200,
          color:'#F9F3FA',
          paddingTop:12,
          paddingBottom:12,
          background: "rgba(64, 26, 57, 1)"
        },
        "& li:hover":{
          background: "#310e2b",
        },
        "& li.Mui-selected":{
          fontWeight:200,
          fontFamily:"1rem",
          color:'#F9F3FA',
          background: "#310e2b"
        },
        "& li.Mui-selected:hover":{
          background: "#310e2b",
          color:'#F9F3FA',
        },
    },
    formControl:{
        background:"rgba(12, 11, 11, 1)",
        padding:15,
        borderRadius:10,
        width:"100%"
    },
    icon: { color: "white" },
    dialogPaper:{
      background:"#1C191D",
      padding:12,
      borderRadius:12,
      color:"#F9F3FA",
      letterSpacing:"0.03em"
    }
  }));

  const Accordion = withStyles({
    root: {
        padding:"0px 8px",
      margin:"0px -8px",
      background:'#2D232B',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin:"0px -8px",
        background:"#1C191D",
        borderRadius:12
      },
    },
    expanded: {},
  })(MuiAccordion);
  
  const AccordionSummary = withStyles({
    root: {
        padding:"0px ",
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
        margin: '0',
      '&$expanded': {
        margin: '0',
      },
    },
    expanded: {},
  })(MuiAccordionSummary);
  
 