import React from "react";

const Card = (props) =>{
return (
    <div className="bg-gray-800 rounded text-white shadow-md mx-2 my-2">
            <div>
                <p className="mx-2 font-bold py-2 px-2">{props.title}</p>
            </div>
            <div className="flex items-center justify-center">
                <img className="h-3/4" src = {props.src} alt = ""/>
            </div>
            <div>
            <p className="mx-2 py-2 font-mono">{props.description}</p>
            </div>
            <div className="flex justify-center items-center">
                <button className="bg-blue-200 text-gray-800 py-1 px-2 mx-2 my-2 rounded">Preview</button>
                <button className="bg-blue-200 text-gray-800 py-1 px-2 mx-2 my-2 rounded">Github</button>
            </div>
    </div>
    )
}

export default Card;