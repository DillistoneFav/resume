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
import {IntechImageTitles, IntechIMGS, IntechFrontSpec, IntechBacktSpec} from "./projects utils/Intechcom";
import IntechLogo from "../../assets/Intechcom/logo.png"
import { TestTaskBackSpecs, TestTaskFrontSpecs, TestTaskImageTitles, TestTaskImgs } from './projects utils/Test-tasks';
import testTasksLogo from "../../assets/Test Tasks/Micro-Tasks.png"


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
                key={0}
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
                key={1}
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
                key={2}
            />
            <ProjectItem
                name={testTasksLogo}
                background={"linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(13,242,82,1) 50%, rgba(0,0,0,1) 100%)"}
                boxShadow={"0px 0px 10px 10px rgba(13, 232, 79, 0.2)"}
                sliderImages={TestTaskImgs}
                titles={TestTaskImageTitles}
                frontSpecs={TestTaskFrontSpecs}
                backSpecs={TestTaskBackSpecs}
                borderColor={"1px solid rgba(255, 124, 124, 0.49)"}
                fontColor={"#000"}
                pagesLeft={-100}
                key={3}
            />
            <ProjectItem
                name={IntechLogo}
                background={"linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(242,128,13,1) 50%, rgba(0,0,0,1) 100%)"}
                boxShadow={"0px 0px 10px 10px rgba(242, 128, 13, 0.2)"}
                sliderImages={IntechIMGS}
                titles={IntechImageTitles}
                frontSpecs={IntechFrontSpec}
                backSpecs={IntechBacktSpec}
                borderColor={"1px solid rgba(255, 255, 255, 0.49)"}
                fontColor={"#fff"}
                pagesLeft={-100}
                key={4}
            />
        </div>
    );
};

export default Pet;