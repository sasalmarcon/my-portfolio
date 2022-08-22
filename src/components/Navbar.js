import React, {useState} from "react";

const App = () =>{

    const [isNavLinks,setIsNavLinks] = useState(false);

    return (
        <nav className="bg-gray-900 py-1 sm:flex sm:justify-between w-full">
        <div className = 'flex justify-between items-center '>
            <div className="text-white">
                <p className="mx-2 px-2 font-semibold">SASAL MARCON</p>
            </div>
           
            <div className="mx-2 py-2 sm:hidden">
                <button onClick = {()=>setIsNavLinks(prev =>!prev)}>
                    { isNavLinks ? <img className="h-8 focus:border-none" src="https://img.icons8.com/sf-regular-filled/96/EBEBEB/x.png" alt =""/>
                    :<img className="h-8" src="https://img.icons8.com/sf-black/64/EBEBEB/menu.png" alt ="menu"/>}
                </button>
            </div>
        </div>
            <div className={` text-white bg-gray-900 py-2 my-1 z-10 w-full absolute ${isNavLinks ? "visible":"hidden"} sm:w-auto sm:flex sm:relative`}>
                <a href = "#home" className="block py-2 px-2 mx-2 rounded hover:bg-gray-600">Home</a>
                <a href = "#about" className="block py-2 px-2 mx-2 rounded hover:bg-gray-600">About</a>
                <a href = "#projects" className="block py-2 px-2 mx-2 rounded hover:bg-gray-600">Projects</a>
            </div>
</nav>
    )
}
export default App;