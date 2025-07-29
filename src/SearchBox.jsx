import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox({updateInfo}){

    let[city,setCityName]=useState("");

    const API_URL="http://api.openweathermap.org/data/2.5/weather";
    const API_KEY="cf29678e9c4180faec16fb987700481b";
    

    let getWeatherInfo=async()=>{

        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();

        let result={
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description

        }

        console.log(result);
        return result;
    }


    let handleChange=(e)=>{
        setCityName(e.target.value);
    }

    let handleSubmit= async (e)=>{
        e.preventDefault();
        setCityName("");
        let newInfo= await getWeatherInfo();
        updateInfo(newInfo);


    }



    return(
        <div>
            <form className='SearchBox' onSubmit={handleSubmit}>
                <h2>Search for the city to get the weather</h2>
                <TextField id="id" label="City-Name" variant="outlined" required  value={city} onChange={handleChange}/>
                {" "}
                <Button variant="contained" type="submit">Send</Button>
            </form>
        </div>
    )
}