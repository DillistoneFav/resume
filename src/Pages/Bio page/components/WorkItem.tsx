import React, {FC} from 'react';
import classes from "../bio.module.css";

interface WorkItemProps {
    number: string;
    title: string;
    description: string;
}

const WorkItem: FC<WorkItemProps> = ({number, title, description}) => {
    return (
        <div className={classes.workItem}>
            <div className={classes.workItemNumber}>{number}</div>
            <div className={classes.workItemExactly}>
                <div className={classes.workItemTitle}>{title}</div>
                <div className={classes.workItemDescription}>
                    {description}
                </div>
            </div>
        </div>
    );
};

export default WorkItem;