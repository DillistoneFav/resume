import React from 'react';
import classes from './work.module.css'
import WorkItem from "./components/workItem";
import SedMax from '../../assets/logo-sedmax.svg';
import {placeStartDuties, placeStartTechnologies, sedmaxDuties, sedmaxTechnologies} from "./components/arrays";
import placeStart from '../../assets/place-logo.svg'

const Work = () => {
    return (
        <div className={classes.workContainer}>
            <WorkItem
                logo={SedMax}
                title={"sedmax"}
                description={"Is a tool that allows you to receive data from various sensor systems or other components and display, process or manage them in a web interface."}
                color={"#1E68B2"}
                dates={"December 2021 - May 2022"}
                position={"React developer"}
                techObject={sedmaxTechnologies}
                duties={sedmaxDuties}
                link={"https://sedmax.ru"}
            />
            <WorkItem
                logo={placeStart}
                title={"place start"}
                description={"Is a company of web-sites and landings development with WordPress and Django CMS systems."}
                color={"#9BBF2E"}
                dates={"December 2020 - February 2021"}
                position={"HTML, PHP coder (WordPress)"}
                techObject={placeStartTechnologies}
                duties={placeStartDuties}
                link={"https://place-start.ru"}
            />
        </div>
    );
};

export default Work;