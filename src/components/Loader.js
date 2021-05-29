import React from 'react'
import loaderGif from "../assets/loader.gif"
export default function Loader() {
    return (
        <div className="loader">
           <img src={loaderGif}/>  
        </div>
    )
}
