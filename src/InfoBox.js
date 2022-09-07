import React from "react";
import "./InfoBox.css";
import { Card, CardContent, Typography } from "@material-ui/core";


const InfoBox = ({title, active, isRed, deltaCases, total, ...props}) => {
  return (
    <Card 
    // className="infoBox"
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      }`}
    >
      <CardContent>

        {/* title displayed */}
        <Typography className="infobox__title" color="textSecondary" gutterBottom>
          {title}
        </Typography>

        {/* info like change in cases/recovery/testingsdone */}
        <h2
         className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}
        >
          {deltaCases}
        </h2>

        <Typography className="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  )
}

export default InfoBox