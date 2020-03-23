import React,{useEffect, useState} from 'react';
import axios from 'axios';
import SearchFilter from './SearchFilter'
import Weather from './Weather';
import './Styles.css';



const Locations = (props) => {
    const {location, coordinates} = props;
    const [data, setData] = useState({ locations: [] });

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
                    setData({ locations: response.data.features});
                    console.log(data);
                });
        }else{
            setData({locations:[]});
        }
    },[location]);


    return (
        <div className='Locations'>
            <div className='Search'>
                <div className='Filter'>
                    <SearchFilter onClick={{onLocation:props.onClick.onLocation}}/>
                </div>
                <div className='Results'>
                    {data.locations.map(elem => {return <span className='Place' onClick={()=>props.onClick.onCoordinates(elem.geometry.coordinates)}>{elem.place_name}</span>})}
                </div>
            </div>
            
            {(coordinates !== "") ? 
                <Weather coordinates={coordinates}/>
            : null }
        </div>
    );
};

export {Locations as default}