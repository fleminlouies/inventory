import React from 'react';
import Header from '../Shared/Header';
import Initial from './Initial';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';


export default function Step1({callback}) {
    const classes = useStyles();
    const prevForm = () => {
        callback(<Initial callback={callback} />)

    }
    return (
        <div>
            <Header Title={'Check-in Report'} onClick={prevForm}/>
            <Container style={{padding:'21px'}}>
                <h2>Add all of the rooms and spaces inside the property. Tap on the room or space to start documenting its Inventory and Condition.
                    Hold down on the item to duplicate or delete it. 
                </h2>
                <Button className={classes.Button}  elevation={5}>Entrance/Hallway</Button>
                <Button className={classes.Button}  elevation={5}>Bedroom </Button>
                <Button className={classes.Button}  elevation={5}>Kitchen</Button>
                <Button className={classes.ButtonInner}  elevation={5} >Start from scratch</Button>
            </Container>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({

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
  }));
