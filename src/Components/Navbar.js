import React from 'react'
import { Container, Toolbar, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100vw",
        background: "none",
    },
    a :{
        paddingLeft:"1.5em",
        textDecorationLine:"none",

    },
    btn: {
        borderRadius: "15%",
            background: "linear-gradient(to left, rgb(73, 45, 197), cyan)",
            border:" none",
        }
    
}))
function Navbar() {
    const classes = useStyles();
    return (
        <Container className={classes.root}>

            <Toolbar>
                <Typography style={{ flexGrow: 2.5 }}
                ></Typography>
                <Button href="#" className={classes.a}>Don't have an account?</Button>
                <Button color="inherit" className={classes.btn}>Signup</Button>
            </Toolbar>

        </Container>

    )
}

export default Navbar
