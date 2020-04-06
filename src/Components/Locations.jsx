import React,{useEffect, useState} from 'react';
import axios from 'axios';
import SearchFilter from './SearchFilter'
import Weather from './Weather';
import './Styles.css';



const Locations = () => {
    const [location, setLocation] = useState("");
    const [coordinates, setCoordinates] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        if(location !== ""){
            const mapBoxURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
            const city = `${location}.json?access_token=`;
            const mapBoxtoken = 'pk.eyJ1IjoibGZyZXNub2ciLCJhIjoiY2sxYW8wc3o2MGczbTNpcjVoZ2sxbWRnZiJ9.Jdss3fcdT5Nypqn2KMQiFA';
            const config = '&language=es'
            const url = `${mapBoxURL}${city}${mapBoxtoken}${config}`;
            console.log(url);
            axios.get(url)
                .then(response => {
                    setData(response.data.features);
                    console.log(data);
                });
        }else{
            setData([]);
        }
    },[location]);


    return (
        <div className='Locations'>
            <div className='Search'>
                <div className='Filter'>
                    <SearchFilter onClick={{onLocation:setLocation}}/>
                </div>
                <div className='Results'>
                    {data.map(elem => {return <span className='Place' onClick={()=>setCoordinates(elem.geometry.coordinates)}>{elem.place_name}</span>})}
                </div>
            </div>
            
            {(coordinates !== "") ? 
                <Weather coordinates={coordinates}/>
            : null }
        </div>
    );
};

export {Locations as default}