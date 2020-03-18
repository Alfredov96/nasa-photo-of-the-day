import React, {useState, useEffect} from "react";
import axios from "axios";

export default function Nasa(){
    const [image, setImage] = useState([]);
    useEffect(()=>{
    axios
    .get("https://api.nasa.gov/planetary/apod")
    .then(response => {
        console.log(response)
    })
})}





