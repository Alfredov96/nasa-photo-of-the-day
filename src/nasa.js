import React, {useState, useEffect} from "react";
import axios from "axios";
import Icard from "./Icard";

export default function Nasa(){
    const [data, setData] = useState({});

    useEffect(()=>{
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=nOlGmpekLQHUP70bfyXQTpY7jNieas6lNQfdoCgd`)

    .then (response => {
        console.log(response);
    setData(response.data)
    }) .catch(error => {
        console.log(error);
    })
    },[]);
    return( 
        <div className='img-container'>
        
        <Icard data={data}/>
        
        </div>
    )}





