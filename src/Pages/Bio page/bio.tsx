import React from 'react';
import myPhoto from "../../assets/me.png";
import reactGIF from '../../assets/reactGIF.gif';
import WorkItem from "../Bio page/components/WorkItem";
import FeatureItem from "../Bio page/components/featureItem";
import FolderIcon from "@mui/icons-material/Folder";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import TranslateIcon from "@mui/icons-material/Translate";
import MultipleStopIcon from "@mui/icons-material/MultipleStop";
import PanoramaIcon from "@mui/icons-material/Panorama";
import ApiIcon from "@mui/icons-material/Api";
import BuildIcon from '@mui/icons-material/Build';
import BugReportIcon from '@mui/icons-material/BugReport';
import classes from "./bio.module.css"
import WorkHistoryItem from "./components/WorkHistoryItem";

const Pet = () => {
    return (
        <div className={classes.mainContBio}>
            <div className={classes.firstSect}>
                <div className={classes.leftSide}>
                    <img className={classes.myPhoto} alt={"my img"} src={myPhoto}/>
                </div>
                <div className={classes.rightSide}>
                    <div className={classes.introduction}>
                        <div className={classes.realIntro}>
                            <p className={classes.surname}>Melnikov</p>
                            <p className={classes.name}>Kirill</p>
                            <div className={classes.jobPref}>Web Developer</div>
                        </div>
                        <div className={classes.reactLogo}>
                            <div className={classes.info}>
                                <div className={classes.infoItem}>
                                    <div className={classes.infoTitle}>GitHub</div>
                                    <span className={classes.infoDesc}>DillistoneFav</span>
                                </div>
                                <div className={classes.infoItem}>
                                    <div className={classes.infoTitle}>Telegram</div>
                                    <span className={classes.infoDesc}>@howareyadoin</span>
                                </div>
                                <div className={classes.infoItem}>
                                    <div className={classes.infoTitle}>Email</div>
                                    <span className={classes.infoDesc}>DilliWork@yandex.ru</span>
                                </div>
                            </div>
                            <img className={classes.reactGIF} alt={"alt"} src={reactGIF}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.secondSect}>
                <div className={classes.leftSide}>
                    <div className={classes.descItem}>
                        <div className={classes.introTitle}>INTRO</div>
                        <div className={classes.introDesc}>What I am all about</div>
                    </div>
                </div>
                <div className={classes.rightSide}>
                    <p className={classes.aboutMe}>
                        I always try to make any project I work with better, than it was before.<br/>
                        A cheerful, friendly guy :p (and responsible of course)
                    </p>
                </div>
            </div>
            <div className={classes.thirdSect}>
                <div className={classes.leftSide}>
                    <div className={classes.descItem}>
                        <div className={classes.introTitle}>EXPERTISE</div>
                        <div className={classes.introDesc}>What do i work with</div>
                    </div>
                </div>
                <div className={classes.rightSide}>
                    <div className={classes.row}>
                        <WorkItem number={"01"} title={"HTML (PUG)"}
                                  description={"Adaptive markup, HTML template usage, BEM methodology, Flex/Grid layout"}/>
                        <WorkItem number={"02"} title={"ADVANCED CSS"}
                                  description={"CSS Animations, Flex/Grid layout, SASS/SCSS preprocessing, CSS modules"}/>
                    </div>
                    <div className={classes.row}>
                        <WorkItem number={"03"} title={"Javascript/Typescript"}
                                  description={"OOP, Functional programming, SOLID/DRY principles (not an expert), Promises, Async/Await"}/>
                        <WorkItem number={"04"} title={"React JS"}
                                  description={"Functional components, Class components, react-router, Rest API, Webpack (npm/yarn), State managers, Next JS"}/>
                    </div>
                    <div className={classes.row}>
                        <WorkItem number={"05"} title={"Figma"} description={"I can work with layouts and designs"}/>
                        <WorkItem number={"06"} title={"Git/GitLab/others"}
                                  description={"Things all programmers must do"}/>
                    </div>
                </div>
            </div>
            <div className={classes.fourthSect}>
                <div className={classes.leftSide}>
                    <div className={classes.descItem}>
                        <div className={classes.introTitle}>FEATURES</div>
                        <div className={classes.introDesc}>I can use in web</div>
                    </div>
                </div>
                <div className={classes.rightSide}>
                    <div className={classes.row}>
                        <FeatureItem
                            icon={<FolderIcon className={classes.featIcon}/>}
                            title={"Webpack"}
                        />
                        <FeatureItem
                            icon={<BuildIcon className={classes.featIcon}/>}
                            title={"Next JS"}
                        />
                        <FeatureItem
                            icon={<AccountBalanceIcon className={classes.featIcon}/>}
                            title={"Mobx/Redux"}
                        />
                        <FeatureItem
                            icon={<MultipleStopIcon className={classes.featIcon}/>}
                            title={"Websocket"}
                        />
                    </div>
                    <div className={classes.row}>
                        <FeatureItem
                            icon={<ApiIcon className={classes.featIcon}/>}
                            title={"Rest/GraphQL"}
                        />
                        <FeatureItem
                            icon={<PanoramaIcon className={classes.featIcon}/>}
                            title={"UI React kits"}
                        />
                        <FeatureItem
                            icon={<TranslateIcon className={classes.featIcon}/>}
                            title={"i18next"}
                        />
                        <FeatureItem
                            icon={<BugReportIcon className={classes.featIcon}/>}
                            title={"Testing Library"}
                        />
                    </div>
                </div>
            </div>
            <div className={classes.fifthSect}>
                <div className={classes.leftSide}>
                    <div className={classes.descItem}>
                        <div className={classes.introTitle}>Work</div>
                        <div className={classes.introDesc}>My history</div>
                    </div>
                </div>
                <div className={classes.rightSide}>
                    <WorkHistoryItem
                        year={"2020"}
                        companyName={"PlaceStart"}
                        companyDesc={"Web Sites with Wordpress and Django"}
                        href={"https://place-start.ru"}
                    />
                    <WorkHistoryItem
                        year={"2021-2022"}
                        companyName={"SEDMAX"}
                        companyDesc={"Highly-loaded websocket SPA"}
                        href={"https://sedmax.ru"}
                    />
                    <WorkHistoryItem
                        year={"2022"}
                        companyName={"Pet projects developing"}
                        companyDesc={"React, Next, Redux/MobX etc. training"}
                        href={"https://github.com/DillistoneFav?tab=repositories"}
                    />
                </div>
            </div>
        </div>
    );
};

export default Pet;