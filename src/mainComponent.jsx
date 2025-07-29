
import SearchBox from './SearchBox'

import InfoBox from './InfoBox'
import { useState } from 'react'
export default function WeatherApp(){

    const [weatherInfo,setweatherInfo]=useState({
        city:"",
        feelsLike:null,
        temp:null,
        tempMin:null,
        tempMax:null,
        weather:"",
        humidity:null
    });

    let updateInfo=(result)=>{

        setweatherInfo(result);
    }


    return(

        <div>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>

        </div>
    )
}