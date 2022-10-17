import React, {FC} from 'react';
import classes from '../bio.module.css'

interface WorkHistoryItemProps {
    year: string;
    companyName: string;
    companyDesc: string;
    href: string;
}


const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
};

const WorkHistoryItem: FC<WorkHistoryItemProps> = ({year, companyName, companyDesc, href}) => {

    return (
        <>
            <div className={classes.workHistoryItemCont}>
                <span onClick={() => openInNewTab(href)} className={classes.companyName}>{companyName}</span>
                <span className={classes.companyDesc}>{companyDesc}</span>
                <span className={classes.year}>{year}</span>
                <span className={"line"}></span>
            </div>
        </>
    );
};

export default WorkHistoryItem;