import React from 'react';
import ProjectItem from "./components/ProjectItem";
import {FairyTailBackSpecs, FairyTailFrontSpecs, FaityTailImageTitles, FTimgs} from "./projects utils/Fairy-tail";
import {TGFrontSpecs, TGImages, TGImageTitles} from "./projects utils/Telegram-web";
import FTLogo from "../../assets/Fairy Tail/Fairy-Tail-logo.png";
import FTName from "../../assets/Fairy Tail/FTname.png";
import TGname from "../../assets/Telegram web/TGName.png"
import TGlogo from "../../assets/Telegram web/TGCutLogo.png"
import {IEBackSpecs, IEFrontSpecs, IEImages, IEImageTitles} from "./projects utils/Internet-shop";
import IELogo from "../../assets/Internet shop/IELogo.png"
import IEName from "../../assets/Internet shop/IEName2.png"


const Pet = () => {
    return (
        <div>
            <ProjectItem
                logo={IELogo}
                name={IEName}
                background={"linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(75,30,255,1) 50%, rgba(0,0,0,1) 100%)"}
                boxShadow={"0px 0px 10px 10px rgba(74, 29, 253, 0.2)"}
                sliderImages={IEImages}
                titles={IEImageTitles}
                frontSpecs={IEFrontSpecs}
                backSpecs={IEBackSpecs}
                borderColor={"1px solid #fff"}
                fontColor={"#fff"}
                borderBottom={"#fff"}
            />
            <ProjectItem
                logo={TGlogo}
                name={TGname}
                background={"linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(117,106,199,1) 50%, rgba(0,0,0,1) 100%)"}
                boxShadow={"0px 0px 10px 10px rgba(117, 106, 199, 0.2)"}
                sliderImages={TGImages}
                titles={TGImageTitles}
                frontSpecs={TGFrontSpecs}
                borderColor={"1px solid #D179D1"}
                fontColor={"#D179D1"}
                borderBottom={"#D179D1"}
                pagesLeft={-100}
            />
            <ProjectItem
                logo={FTLogo}
                name={FTName}
                background={"linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(154,20,48,1) 50%, rgba(0,0,0,1) 100%)"}
                boxShadow={"0px 0px 10px 10px rgba(154, 20, 48, 0.2)"}
                sliderImages={FTimgs}
                titles={FaityTailImageTitles}
                frontSpecs={FairyTailFrontSpecs}
                backSpecs={FairyTailBackSpecs}
                borderColor={"1px solid rgba(255, 124, 124, 0.49)"}
                fontColor={"#000"}
            />
        </div>
    );
};

export default Pet;