import React from 'react'
import './common.css'
import {AppBar, Toolbar, Typography as Typo, makeStyles} from "@material-ui/core"
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

const useStyle = makeStyles({
    header : {
        background : "#345671"
    },
    headercontent:{
        marginLeft : "1rem"
    }
})

const Navbar = () => {

    const classes = useStyle();
  return (
    <AppBar className={classes.header} position="static">
        <Toolbar>
            <Link className="link" to="/"> 
                <Typo className={classes.headercontent} variant='h6'> ICC Cricket World cup 2019 </Typo>
            </Link>
            <Link className="link" to="/addplayer"> 
                <Typo className={classes.headercontent} > Add Player </Typo>
            </Link>
            <Link className="link" to="/allplayers"> 
                <Typo className={classes.headercontent} > All Players </Typo>
            </Link>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar