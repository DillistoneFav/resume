import React, {FC, useState} from 'react';
import classes from "../pet.module.css";
import MyButton from "./MyButton";

interface ProjectItemProps {
    logo: string;
    name: string;
    background: string;
    boxShadow: string;
    sliderImages: any[];
    titles: string[];
    frontSpecs: string[];
    backSpecs?: string[];
    borderColor: string;
    fontColor: string;
    borderBottom?: string;
    pagesLeft?: number;
}

const ProjectItem: FC<ProjectItemProps> = ({
        logo,
        name,
        background,
        boxShadow,
        sliderImages,
        titles,
        frontSpecs,
        backSpecs,
        borderColor,
        fontColor,
        borderBottom,
        pagesLeft
    }) => {

    const [selectedIMG, setSelectedIMG] = useState<string>(sliderImages[0])

    return (
        <div className={classes.petMainContainer} style={{background: background, color: fontColor}}>
            <div className={classes.leftSide}>
                <div className={classes.leftSideCont}>
                    <div className={classes.LogoContainer}>
                        <img className={classes.FTlogo} alt="projLogo" src={logo}/>
                        <div className={classes.ProjectName}><img alt="projName" src={name}/></div>
                    </div>
                    <div className={classes.pagesSection}>
                        <div style={pagesLeft ? {left: pagesLeft} : {}} className={classes.buttonsHeader}><span>Pages:</span></div>
                        <div className={classes.buttonsContainer}>
                            {titles.map((item, index) => {
                                return (
                                    <MyButton
                                        title={item}
                                        selectedIMG={selectedIMG}
                                        IMGArray={sliderImages}
                                        setSelectedItem={setSelectedIMG}
                                        number={index}
                                        fontColor={fontColor}
                                    />
                                )
                            })}
                        </div>
                    </div>
                    <div style={{border: borderColor}} className={classes.line}></div>
                    <div className={classes.stackExactly}>
                        <div style={backSpecs ? {width: "50%"} : {width: "100%"}} className={classes.frontEnd}>
                            <div style={borderBottom ? {borderBottom: `2px solid ${borderBottom}`} : {}} className={classes.stackTitle}>Frontend</div>
                            {frontSpecs.map((item, index) => {
                                return <div style={(index === frontSpecs.length-1) ? {borderBottom: `2px solid ${borderBottom}`} : {}} className={classes.tech}>{item}</div>
                            })}
                        </div>
                        <div style={backSpecs ? {display: "block"} : {display: "none"}} className={classes.frontEnd}>
                            <div style={borderBottom ? {borderBottom: `2px solid ${borderBottom}`} : {}} className={classes.stackTitle}>Backend</div>
                            {backSpecs?.map((item, index) => {
                                return <div style={(index === frontSpecs.length-1) ? {borderBottom: `2px solid ${borderBottom}`} : {}} className={classes.tech}>{item}</div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.rightSide}>
                <div style={{boxShadow: boxShadow}} className={classes.imgCont}><img alt={"selectedPNG"} src={selectedIMG}/></div>
            </div>
        </div>
    );
};

export default ProjectItem;