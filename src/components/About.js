import React from "react";

const About = () =>{
return (
    <section className="" id = "about">
        <div className="flex">
            <div className="mx-2">
             <p className="text-4xl font-bold">About Me</p>
             <p className="text-2 my-3 font-medium">I am a web developer.</p>
             <hr/>
             <p className="text-2 my-3 font-medium">I create web apps using React and other frameworks.</p>
             <hr/>
             <p className="text-2 my-3 font-medium">Expanding my tech stack and working on Projects.</p>
            </div>
            <div>
                <img src = "./images/hero.png" alt ="hero"/>
            </div>
     
        </div>
        <div className="">
        <div className="mx-2">
             <p className="text-4xl font-bold flex flex-col">SKILLS</p>
             <p className="text-2 my-3 font-medium">FRONTEND</p>
                    <div className="flex">
                    <div className="flex flex-col mx-2 my-2">
                    <img className = "w-10" src="https://img.icons8.com/officel/80/000000/react.png" alt = ""/>
                    <strong>React</strong>
                    </div>

                    <div className="flex flex-col mx-2 my-2">
                    <img className = "w-10" src="https://img.icons8.com/fluency/96/000000/tailwind_css.png" alt = ""/>
                    <strong>Tailwind</strong>
                    </div>
                    </div>
                   
             <hr/>
             <p className="text-2 my-3 font-medium">BACKEND</p>
             <div className="flex">
                    <div className="flex flex-col mx-2 my-2">
                    <img className = "w-10" src="https://img.icons8.com/fluency/96/000000/node-js.png" alt = ""/>
                    <strong>Node JS</strong>
                    </div>

                    <div className="flex flex-col mx-2 my-2">
                    <img className = "w-10" src="https://img.icons8.com/windows/96/000000/node-js.png" alt = ""/>
                    <strong>Express</strong>
                    </div>
                    </div>
             <hr/>

             <p className="text-2 my-3 font-medium">DATABASE</p>
             <div className="flex">
                    <div className="flex flex-col mx-2 my-2">
                    <img className = "w-10" src="https://img.icons8.com/color/96/000000/mysql-logo.png" alt = ""/>
                    <strong>MySql</strong>
                    </div>

                    <div className="flex flex-col mx-2 my-2">
                    <img className = "w-10" src="https://img.icons8.com/color/96/000000/firebase.png" alt = ""/>
                    <strong>Firebase</strong>
                    </div>
                    </div>
             <hr/>
            </div>
        </div>
        <div className="">
        <p className="mx-2 text-4xl font-bold">Certificates</p>
        <div className="flex items-center">
        <img className = "h-8 mx-2" src="https://img.icons8.com/ios-filled/50/000000/certificate.png" alt = ""/>
        <p className="mx-2 text-2 my-3 font-medium">Bachelors's Degree In Electrical Engineering</p>
        </div>
      
        </div>
    </section>
)
}

export default About;