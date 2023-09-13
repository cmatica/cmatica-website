import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import "../styles/style.css";
import {NavLink, useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import {makeStyles} from "@mui/styles";
import Logo from './Logo';


const useStyles = makeStyles(theme => ({
    links: {
        marginRight: "1%",
        color: "#616161",
        textDecoration: 'none'

    },
    appBar: {
        background: "whitesmoke",
        height: "64px",
        color: "whitesmoke"
    }

}))
const ResponsiveAppBar = () => {
    const classes = useStyles();
    let navigate = useNavigate();
    return (
        <AppBar id='navBar' className={classes.appBar} style={{color: 'white'}}
                sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Button onClick={() => navigate('/home')}><Logo/></Button>
                    <span id='navBarRightNavigation'>
                    <NavLink to="/home" className={classes.links}>{'Home'}</NavLink>
                    <NavLink to="/about" className={classes.links}>{'About us'}</NavLink>
                    <NavLink to="/about" className={classes.links}>{'Our solutions'}</NavLink>
                    <NavLink to="/about" className={classes.links}>{'Verified Projects'}</NavLink>
                    <NavLink to="/about" className={classes.links}>{'Insights'}</NavLink>
                    <NavLink to="/about" className={classes.links}>{'Contact us'}</NavLink>
                        </span>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
