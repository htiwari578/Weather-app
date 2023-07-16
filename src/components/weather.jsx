import React,{useState} from 'react';
import './weather.css';
import axios from 'axios';
import ShowTeamp from './showTemp';

 const Weather = () => {
    const [city , setCity]= useState("");
    const [data, setData] =useState({
        description:"",
        temp:0,
        temp_max:0,
        temp_min:0,
        humidity:0,
        sunrise:0,
        sunset:0,
        country:"",

    })


    const handleClick = ()=> {
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e99f3e50f2db7d3e0e3d79f8e5b592b7`
        )
        
        .then((response)=>{
          const responseData = response.data;
           setData({
            description: responseData.weather[0].description,
            temp: responseData.main.temp,
            temp_max: responseData.main.temp_max,
            temp_min: responseData.main.temp_min,
            humidity: responseData.main.humidity,
            sunrise: responseData.sys.sunrise,
            sunset: responseData.sys.sunset,
            country: responseData.sys.country,
          });
          setCity("");
           });
      
    }


  return (
    <>
    <div className ="container" >
        <h1> Weather App</h1>

        <input type="text" 
        className="form-control"
        placeholder="Enter City Name"
        value={city} 
        onChange={(e)=> {setCity(e.target.value)}}
        />
        
        <button className= "contained m-2" type="submit" onClick={handleClick}>Fetch</button>

 
    </div>

    <ShowTeamp text ={data}></ShowTeamp>
    </>
  )
  
}
export default Weather;