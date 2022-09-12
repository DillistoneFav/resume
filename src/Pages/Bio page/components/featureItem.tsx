import React, { FC } from "react";
import classes from "../bio.module.css";

interface featureItemProps {
  icon: React.ReactNode;
  title: string;
}

const FeatureItem: FC<featureItemProps> = ({ icon, title }) => {
  return (
    <div className={classes.featureCont}>
      {icon}
      <span className={classes.featText}>{title}</span>
    </div>
  );
};

export default FeatureItem;
