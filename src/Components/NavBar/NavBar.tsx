import React from 'react';
import classes from './NavBar.module.css'
import {useTranslation} from "react-i18next";
import { useNavigate } from "react-router-dom";
import {BIO_ROUTE, PETPROJ_ROUTE, WORKHISTORY_ROUTE} from "../../utils/constants";

const NavBar = () => {
    const navigate = useNavigate();

    const {t, i18n} = useTranslation();
    const changeLanguage = () => {
        const lang = localStorage.getItem("i18nextLng")
        lang === "en" ?
            i18n.changeLanguage("ru")
            :
            i18n.changeLanguage("en")
    }

    return (
        <div className={classes.navbar}>
            <div className={classes.container}>
                <div onClick={() => navigate(BIO_ROUTE)} className={classes.decoration}>{t("navbar.bio")}</div>
                <div onClick={() => navigate(PETPROJ_ROUTE)} className={classes.decoration}>{t("navbar.petProjects")}</div>
                <div onClick={() => navigate(WORKHISTORY_ROUTE)} className={classes.decoration}>{t("navbar.workHistory")}</div>
                <div onClick={() => changeLanguage()} className={classes.decoration}>{t("navbar.language")}: {t("navbar.languageExactly")}</div>
            </div>
        </div>
    );
};

export default NavBar;