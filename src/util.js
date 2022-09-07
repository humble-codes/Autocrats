import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    rgb: "rgb(204, 16, 52)",
    half_op: "rgba(204, 16, 52, 0.5)",
    multiplier: 50,
  },
  recovered: {
    hex: "#7dd71d",
    rgb: "rgb(125, 215, 29)",
    half_op: "rgba(125, 215, 29, 0.5)",
    multiplier: 50,
  },
  deaths: {
    hex: "#fb4443",
    rgb: "rgb(251, 68, 67)",
    half_op: "rgba(251, 68, 67, 0.5)",
    multiplier: 100,
  },
};

export const sortData = (data) => {
  let sortedData = [...data];
  sortedData.sort((a, b) => {
    if (a.totConfirmed > b.totConfirmed) {
      return -1;
    } else {
      return 1;
    }
  });
  return sortedData;
};

export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";

export const showDataOnMap = (data, casesType = "cases") =>
  data.map((state) => (

    <Circle
      center={[state.lat, state.long]}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      fillOpacity={0.4}
      radius={
        Math.sqrt(state.totConfirmed) * casesTypeColors[casesType].multiplier
      }


    >

      <Popup>
        <div className="info-container">
          <div className="info-name">{state.state}</div>
          <div className="info-confirmed">
            Cases: {numeral(state.totConfirmed).format("0,0")}
          </div>
          <div className="info-recovered">
            Recovered: {numeral(state.totRecovered).format("0,0")}
          </div>
          <div className="info-deaths">
            Tested: {numeral(state.totTested).format("0,0")}
          </div>
        </div>
      </Popup>
    </Circle>
  ));







 