import React,{useEffect, useState} from 'react';
import axios from 'axios';
import './Styles.css';

const Weather = (props) => {
    const {coordinates} = props;
    const [data, setData] = useState("");

    useEffect(() => {
        if(coordinates !== ""){
            const CORS = 'https://cors-anywhere.herokuapp.com/';
            const darkSkyURl = 'https://api.darksky.net/forecast/';
            const darkSkytoken = '0bf7315cb9ae3541719dabc3a5f18e62';
            const config = '?lang=es&units=ca'
            const url = `${CORS}${darkSkyURl}${darkSkytoken}/${coordinates[0]},${coordinates[1]}${config}`;
            console.log(url);
            axios.get(url)
                 .then(response => {
                    setData(response.data.currently);
                    console.log(data);
                });
        }
        
    },[coordinates]);

    return (
        <div class="Weather">
        <h3>{data.summary}</h3>
        <h2>{data.windSpeed}km/h</h2>
        <h2>{data.precipProbability}%</h2>
        <h1>{data.temperature}°</h1>        
    </div>

    );
};

export {Weather as default}