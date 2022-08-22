import React from "react";

const Hero = () =>{
return (
    <section className="bg-gradient-to-b from-blue-400 to-white h-screen py-2 px-2 flex flex-col justify-center items-center w-full" id = "home">
        <div>
        <p className="text-4xl font-extrabold text-center">Hi, I'm Sasal Marcon </p>
        <p className="text-2xl text-center font-semibold font-mono"> {`< Web developer />`} </p>
        </div>
        <button className="bg-blue-700 rounded my-4 px-2 py-2 font-mono font-bold text-gray-200 hover:bg-blue-600">DOWNLOAD RESUME</button>
    </section>
)
}

export default Hero;