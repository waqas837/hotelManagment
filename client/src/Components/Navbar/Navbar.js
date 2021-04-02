import React from 'react';
import { Box, Typography, makeStyles,Divider} from '@material-ui/core';
import {Facebook,Instagram} from "@material-ui/icons"

const useStyles = makeStyles(theme=>({
    center:{
     textAlign:"center"
    }
}))
const Navbar = () => {
   const classes = useStyles()
    return (
        <Box className={classes.center}>
         <Typography variant="h4" color="primary">HD Wallpaper</Typography>
         <Facebook color="primary"/>
         <Instagram color="secondary"/>
         <Divider/>
        </Box>
    )
}

export default Navbar
