import React from "react";
import classes from "./bio.module.css";
import myPhoto from "../../assets/me.png";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import MultipleStopIcon from "@mui/icons-material/MultipleStop";
import FolderIcon from "@mui/icons-material/Folder";
import TranslateIcon from "@mui/icons-material/Translate";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PanoramaIcon from "@mui/icons-material/Panorama";
import ApiIcon from "@mui/icons-material/Api";
import MonitorIcon from "@mui/icons-material/Monitor";
import FeatureItem from "./components/featureItem";

const Bio = () => {
  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div className={classes.mainCont}>
      <div className={classes.leftSide}>
        <div className={classes.firstSect}>
          <img className={classes.myPhoto} alt={"my img"} src={myPhoto} />
        </div>
        <div className={classes.secondSect}>
          <div className={classes.descItem}>
            <span className={classes.introTitle}>INTRO</span>
            <br />
            <span className={classes.introDesc}>What I am all about</span>
          </div>
        </div>
        <div className={classes.thirdSect}>
          <div className={classes.descItem}>
            <span className={classes.introTitle}>EXPERTISE</span>
            <br />
            <span className={classes.introDesc}>What do i work with</span>
          </div>
        </div>
        <div className={classes.fourthSect}>
          <div className={classes.descItem}>
            <span className={classes.introTitle}>SKILLS</span>
            <br />
            <span className={classes.introDesc}>I can use in web</span>
          </div>
        </div>
      </div>
      <div className={classes.rightSide}>
        <div className={classes.firstSect}>
          <p className={classes.surname}>Melnikov</p>
          <p className={classes.name}>Kirill</p>
          <span className={classes.jobPref}>Web Developer & Junior</span>
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
        <div className={classes.secondSect}>
          <p className={classes.aboutMe}>about me</p>
        </div>
        <div className={classes.thirdSect}>
          <div className={classes.workItem}>
            <div className={classes.workItemNumber}>01</div>
            <div className={classes.workItemExactly}>
              <div className={classes.workItemTitle}>HTML (PUG)</div>
              <div className={classes.workItemDescription}>
                Adaptive markup, HTML template usage, BEM methodology
              </div>
            </div>
          </div>
          <div className={classes.workItem}>
            <div className={classes.workItemNumber}>02</div>
            <div className={classes.workItemExactly}>
              <div className={classes.workItemTitle}>ADVANCED CSS</div>
              <div className={classes.workItemDescription}>
                CSS Animations, Flex/Grid layout, SASS/SCSS preprocessing, CSS
                modules
              </div>
            </div>
          </div>
          <div className={classes.workItem}>
            <div className={classes.workItemNumber}>03</div>
            <div className={classes.workItemExactly}>
              <div className={classes.workItemTitle}>Javascript/Typescript</div>
              <div className={classes.workItemDescription}>
                OOP, Functional programming, SOLID/DRY principles, Promises,
                Async/Await
              </div>
            </div>
          </div>
          <div className={classes.workItem}>
            <div className={classes.workItemNumber}>04</div>
            <div className={classes.workItemExactly}>
              <div className={classes.workItemTitle}>React JS</div>
              <div className={classes.workItemDescription}>
                Functional components, Class components, react-router, Rest API
                usage, Webpack, SPA development, State managers
              </div>
            </div>
          </div>
          <div className={classes.workItem}>
            <div className={classes.workItemNumber}>05</div>
            <div className={classes.workItemExactly}>
              <div className={classes.workItemTitle}>Git/GitLab/others</div>
              <div className={classes.workItemDescription}>
                Things all programmers must do
              </div>
            </div>
          </div>
          <div className={classes.workItem}>
            <div className={classes.workItemNumber}>06</div>
            <div className={classes.workItemExactly}>
              <div className={classes.workItemTitle}>Node JS</div>
              <div className={classes.workItemDescription}>
                A bit backend knowledge (express, sequelize, SQL)
              </div>
            </div>
          </div>
        </div>
        <div className={classes.fourthSect}>
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
    </div>
  );
};

export default Bio;
