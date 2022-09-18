import React, {FC} from 'react';
import classes from "../pet.module.css";

interface MyButtonProps {
    selectedIMG: string;
    IMGArray: any;
    setSelectedItem(arg0: string): void;
    number: number;
    title: string;
    fontColor: string;
}

const MyButton: FC<MyButtonProps> = ({selectedIMG, IMGArray, setSelectedItem, number, title, fontColor}) => {
    return (
        <button
            style={{color: fontColor}}
            className={selectedIMG === IMGArray[number] ? `${classes.ButtonStyles} ${classes.underline}` : classes.ButtonStyles}
            onClick={() => setSelectedItem(IMGArray[number])}
        >
            {title}
        </button>
    );
};

export default MyButton;