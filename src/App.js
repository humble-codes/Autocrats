import React from "react";
import { useState, useEffect } from "react";
import covidData from "./data" ;

import InfoBox from "./InfoBox";
import Map from "./Map";
import Table from "./Table";
import LineGraph from "./LineGraph";
import numeral from "numeral";
import "leaflet/dist/leaflet.css";

import {sortData} from "./util";

import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent
} from "@material-ui/core";

import "./App.css";

const App = () => {

//  console.log(covidData) ;
  // Usestates required by admiral
  const [countries, setCountries] = useState([]);
  const [country, setInputCountry] = useState("worldwide");
  const [indStates, setIndStates] = useState([]);
  const [indState, setIndState] = useState("india");
  const [indStateInfo, setIndStateInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 20.5937, lng: 78.9629 });
  const [mapZoom, setMapZoom] = useState(4);
  const [mapStates, setMapStates] = useState([]);
  const [casesType, setCasesType] = useState("cases");


  // Showing data of india on loading the webpage first time 
  useEffect( ()=> {
    setIndStateInfo( {
      state: "india" ,
      id: "IND" ,
      lat: 20.5937,
      long:78.9629,
      confirmed: 43218,
      recovered: 53729,
      tested: 9455967,
      totConfirmed: 28762850,
      totRecovered: 28762850,
      totTested: 632826034
    }) ;
  }, [])

  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
        //  let sortedData = sortData(data);
          setCountries(countries);
        //  setMapCountries(data);
        //  setTableData(sortedData);
        });
    };

    getCountriesData();
  }, []);

  useEffect ( () => {

    const getindStatesData = () => {
      const indStates = covidData.map( (indstate)=> ({
        name: indstate.state ,
        value: indstate.id
      })) ;

    //  setTableData(covidData) ;
      const sortedData = sortData(covidData) ;
    //  console.log(`sorted data here`,sortedData) ;
      setTableData(sortedData);
      setMapStates(covidData) ;
      setIndStates(indStates);
    }

      getindStatesData() ;
  }, [])

//  console.log('hithere',indStates, countries) ;

  const onStateChange = (e) => {
    const stateCode = e.target.value;
    setIndState(stateCode) ;

    // when onCHnage selects India 
    if ( stateCode === "india"){
      setIndStateInfo( {
        state: "india" ,
        id: "IND" ,
        lat: 20.5937,
        long:78.9629,
        confirmed: 43218,
        recovered: 53729,
        tested: 9455967,
        totConfirmed: 28762850,
        totRecovered: 29104963,
        totTested: 632826034
      }) ;

      setMapCenter({ lat: 20.5937, lng:78.9629,}) ;
      setMapZoom(4) ;
    }

    // When state changes to some state
    else {
      // Get that Stateinfo from covidData Array and set the state 
      for ( let i =0; i<covidData.length; i++){
        let val = covidData[i].id ;

        if ( stateCode === val){
    //      console.log(covidData[i])
          const randObj = {
            state: covidData[i].state ,
            id: covidData[i].id ,
            lat: covidData[i].lat ,
            long: covidData[i].long,
            confirmed: covidData[i].confirmed,
            recovered: covidData[i].recovered,
            tested: covidData[i].tested ,
            totConfirmed: covidData[i].totConfirmed,
            totRecovered: covidData[i].totRecovered,
            totTested: covidData[i].totTested 
          } ;
          setIndStateInfo({...randObj}) ;
          setMapCenter({ lat: randObj.lat, lng: randObj.long }) ;
          setMapZoom(6) ;
          
          break ;
        }
      }


    }


  };

  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          {/* Title */}
          <h1>COVID-19 Tracker</h1>

          {/* Dropdown Layoutfor states */}
          <FormControl className="app__dropdown">
              <Select
                variant="outlined"
                value={indState}
                onChange={onStateChange}
              >
                <MenuItem value="india">India</MenuItem>
                {indStates.map((indstate) => (
                  <MenuItem value={indstate.value}>{indstate.name}</MenuItem>
                ))}
              </Select>
            </FormControl>       
          </div>

          <div className="app__stats">
          {/* it holds the info to be displayed in infoboxes */}
                
          {/* infobox for covid cases */}
          <InfoBox
              onClick={(e) => setCasesType("cases")}
              title="Coronavirus Cases"

              deltaCases={numeral(indStateInfo.confirmed).format("0,0")}
              total={numeral(indStateInfo.totConfirmed).format("0,0")}

              isRed
              active={casesType === "cases"}
            //  cases={prettyPrintStat(countryInfo.todayCases)}
            //  total={numeral(countryInfo.cases).format("0.0a")}
            />
            
            
          {/* infobox for covid recovery */}
          <InfoBox
              onClick={(e) => setCasesType("recovered")}
              title="Recovered"
              deltaCases={numeral(indStateInfo.recovered).format("0,0")}
              total={numeral(indStateInfo.totRecovered).format("0,0")}
              active={casesType === "recovered"}
            //  cases={prettyPrintStat(countryInfo.todayRecovered)}
            //  total={numeral(countryInfo.recovered).format("0.0a")}
            />


          {/* infobox for covid tests performed */}
          <InfoBox
              onClick={(e) => setCasesType("deaths")}
              title="Tests Performed"
              deltaCases={numeral(indStateInfo.tested).format("0,0")}
              total={numeral(indStateInfo.totTested).format("0,0")}
              isRed
              active={casesType === "deaths"}
            // cases={prettyPrintStat(countryInfo.todayDeaths)}
            //  total={numeral(countryInfo.deaths).format("0.0a")}
            />
          </div>

          {/* Map */}
          <Map indstates= {mapStates} casesType={casesType} center= {mapCenter} zoom= {mapZoom}/>
      </div>

      <Card className="app__right">
        <CardContent> 
          <h3> Live cases by country</h3>
          {/* Table */}
          <Table indStates={tableData}/>
            

          <h3 className="app__graphTitle01"> Worlwide new cases</h3>
          {/* LineGraph */}
            <LineGraph className="app__graph" casesType="cases"/>
        </CardContent>
        
      </Card>
    </div>
  ) ;
}

export default App;