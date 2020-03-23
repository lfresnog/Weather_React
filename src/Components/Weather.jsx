import React,{useEffect, useState} from 'react';
import axios from 'axios';
import './Styles.css';



const Weather = (props) => {
    const {coordinates} = props;
    const [data, setData] = useState({weather: []});

    useEffect(() => {
        if(coordinates !== ""){
            const CORS = 'https://cors-anywhere.herokuapp.com/';
            const darkSkyURl = 'https://api.darksky.net/forecast/';
            const darkSkytoken = '0bf7315cb9ae3541719dabc3a5f18e62';
            const config = '?lang=es'
            const url = `${CORS}${darkSkyURl}${darkSkytoken}/${coordinates[0]},${coordinates[1]}${config}`;
            console.log(url);
            axios.get(url)
                 .then(response => {
                    setData({ weather: response.data.currently});
                    console.log(data);
                });
        }
        
    },[coordinates]);

            // <h4>{data.weather.summary}</h4>
            // <h4>{data.weather.temperature}</h4>
            // <h4>{data.weather.precipProbability}</h4>
    return (
        <div class="Weather">
        <h3>{data.weather.summary}</h3>
        <h2>{data.weather.windSpeed}km/h</h2>
        <h2>{data.weather.precipProbability}%</h2>
        <h1>{data.weather.temperature}°</h1>        
    </div>

    );
};

export {Weather as default}