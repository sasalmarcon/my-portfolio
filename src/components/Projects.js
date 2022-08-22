import React from "react";
import Card from "./Card";

const Project = () =>{
return (
    <section className="mt-10 bg-gray-200 " id = "projects">
         <p className="mx-2 text-4xl font-bold">Projects</p>
        <div className="grid sm:grid-cols-4">
            <Card
                title = "Quizzical"
                src = "./images/quizzical.gif"
                description = "This is a quiz app made in React by calling an api using states and hooks"
            />
             <Card
                title = "Quizzical"
                src = "./images/quizzical.gif"
                description = "This is a quiz app made in React by calling an api using states and hooks"
            />
             <Card
                title = "Quizzical"
                src = "./images/quizzical.gif"
                description = "This is a quiz app made in React by calling an api using states and hooks"
            />
             <Card
                title = "Quizzical"
                src = "./images/quizzical.gif"
                description = "This is a quiz app made in React by calling an api using states and hooks"
            />
        </div>
    </section>
)
}

export default Project;