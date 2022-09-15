import React, {FC} from 'react';
import classes from '../work.module.css'

interface WorkItemProps {
    logo: string;
    title: string;
    description: string;
    color: string;
    dates: string;
    position: string;
    techObject: object;
    duties: string[];
    link: string;
}

const WorkItem: FC<WorkItemProps> = ({logo, title, description, color, dates, position, techObject, duties, link}) => {

    const keys = Object.keys(techObject)
    const values = Object.values(techObject)

    const openInNewTab = (url: string) => {
        const newWindow = window.open(url, "_blank", "noopener,noreferrer");
        if (newWindow) newWindow.opener = null;
    };

    return (
        <div className={classes.workItemCont}>
            <div className={classes.leftSide}>
                <div className={classes.itemExactly}>
                    <img src={logo} alt={"alt"}/>
                    <div className={classes.companyDescriptionContainer}>
                        <div className={classes.companyDescription}>
                            <span onClick={() => openInNewTab(link)} style={{color: color}} className={classes.companyName}>{title}</span> - {description}
                        </div>
                    </div>
                    <div className={classes.myRole}>
                        <div className={classes.specs}>
                            <div className={classes.specsTitle}>Technologies</div>
                            {keys.map((item, index) => {
                                return (
                                    <div
                                        className={classes.specRow}
                                        key={item}
                                    >
                                        <div className={classes.specExactly}>{item}</div>
                                        <div className={classes.specDesc}>{values[index]}</div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className={classes.duties}>
                            <div className={classes.specsTitle}>
                                My Duties
                            </div>
                            <div>
                                {duties.map((item, index) => {
                                    return (
                                        <div className={classes.specDutiesRow}
                                             key={item}
                                        >
                                            {item}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.rightSide}>
                <div className={classes.dates}>
                    {dates}
                </div>
                <div className={classes.position}>
                    {position}
                </div>
                <span className={classes.line}></span>
            </div>
        </div>
    );
};

export default WorkItem;