import React from 'react';
import myPhoto from "../../assets/me.png";
import reactGIF from '../../assets/reactGIF.gif';
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import WorkItem from "../Bio page/components/WorkItem";
import FeatureItem from "../Bio page/components/featureItem";
import FolderIcon from "@mui/icons-material/Folder";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import TranslateIcon from "@mui/icons-material/Translate";
import MultipleStopIcon from "@mui/icons-material/MultipleStop";
import PanoramaIcon from "@mui/icons-material/Panorama";
import ApiIcon from "@mui/icons-material/Api";
import MonitorIcon from "@mui/icons-material/Monitor";
import classes from "./bio.module.css"

const Pet = () => {
  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
      <>
        <div className={classes.firstSect}>
          <div className={classes.leftSide}>
            <img className={classes.myPhoto} alt={"my img"} src={myPhoto} />
          </div>
          <div className={classes.rightSide}>
            <div className={classes.introduction}>
              <div className={classes.realIntro}>
                <p className={classes.surname}>Melnikov</p>
                <p className={classes.name}>Kirill</p>
                <div className={classes.jobPref}>Web Developer & Junior</div>
              </div>

            <div className={classes.reactLogo}>
              <img className={classes.reactGIF} alt={"alt"} src={reactGIF}/>
            </div>
          </div>
            <div className={classes.info}>
              <div className={classes.infoItem}>
                <div className={classes.infoTitle}>Location</div>
                <span className={classes.infoDesc}>Russia, Vologda</span>
              </div>
              <div className={classes.infoItem}>
                <div className={classes.infoTitle}>Phone</div>
                <span className={classes.infoDesc}>+7-911-508-42-41</span>
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
            <div className={classes.iconsCont}>
              <TelegramIcon
                  onClick={() => openInNewTab("https://t.me/howareyadoin")}
                  className={classes.icon}
              />
              <GitHubIcon
                  onClick={() => openInNewTab("https://github.com/DillistoneFav")}
                  className={classes.icon}
              />
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
              I always try to make any project I work with better than it was before.<br/>
              I look at deadlines and offer options to optimize work, or bring any information to the tech lead about what is needed to complete the work.<br/>
              Also I carefully look at the terms of reference, and bring it up for discussion in case of controversial points, since this is one of my duties as a professional.
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
            <WorkItem number={"01"} title={"HTML (PUG)"} description={"Adaptive markup, HTML template usage, BEM methodology"}/>
            <WorkItem number={"02"} title={"ADVANCED CSS"} description={"CSS Animations, Flex/Grid layout, SASS/SCSS preprocessing, CSS modules"}/>
            <WorkItem number={"03"} title={"Javascript/Typescript"} description={"OOP, Functional programming, SOLID/DRY principles, Promises, Async/Await"}/>
            <WorkItem number={"04"} title={"React JS"} description={"Functional components, Class components, react-router, Rest API usage, Webpack, SPA development, State managers"}/>
            <WorkItem number={"05"} title={"Git/GitLab/others"} description={"Things all programmers must do"}/>
            <WorkItem number={"06"} title={"Node JS"} description={"A bit backend knowledge (express, sequelize, SQL)"}/>
          </div>
        </div>
        <div className={classes.fourthSect}>
          <div className={classes.leftSide}>
            <div className={classes.descItem}>
              <div className={classes.introTitle}>SKILLS</div>
              <div className={classes.introDesc}>I can use in web</div>
            </div>
          </div>
          <div className={classes.rightSide}>
            <FeatureItem
                icon={<FolderIcon className={classes.featIcon} />}
                title={"Webpack"}
            />
            <FeatureItem
                icon={<AccountBalanceIcon className={classes.featIcon} />}
                title={"Mobx/Redux"}
            />
            <FeatureItem
                icon={<TranslateIcon className={classes.featIcon} />}
                title={"i18next"}
            />
            <FeatureItem
                icon={<MultipleStopIcon className={classes.featIcon} />}
                title={"Websocket"}
            />
            <FeatureItem
                icon={<PanoramaIcon className={classes.featIcon} />}
                title={"UI React kits"}
            />
            <FeatureItem
                icon={<ApiIcon className={classes.featIcon} />}
                title={"Rest API"}
            />
            <FeatureItem
                icon={<MonitorIcon className={classes.featIcon} />}
                title={"UI/UX"}
            />
          </div>
        </div>
      </>
  );
};

export default Pet;