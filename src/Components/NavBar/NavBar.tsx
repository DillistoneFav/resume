import React from 'react';
import classes from './NavBar.module.css'
import { useNavigate } from "react-router-dom";
import {BIO_ROUTE, PETPROJ_ROUTE, WORKHISTORY_ROUTE} from "../../utils/constants";

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <div className={classes.navbar}>
            <div className={classes.container}>
                <div onClick={() => navigate(BIO_ROUTE)} className={classes.decoration}>BIO</div>
                <div onClick={() => navigate(PETPROJ_ROUTE)} className={classes.decoration}>Pet projects</div>
                <div onClick={() => navigate(WORKHISTORY_ROUTE)} className={classes.decoration}>Work History</div>
            </div>
        </div>
    );
};

export default NavBar;