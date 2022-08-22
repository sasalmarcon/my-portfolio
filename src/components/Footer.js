import React from "react";

const Footer = () =>{

    return (
        <footer className = "bg-gray-800 grid grid-cols-2 text-white w-full">
            <div className="flex flex-col items-center justify-start ">
                <p className="mx-2 my-2 py-2 px-2 font-bold">CONTACT</p>
                <div className="flex mx-2 my-2 items-center">
                <img className = "h-5 mx-1"src="https://img.icons8.com/ios-glyphs/90/EBEBEB/new-post.png" alt = ""/>
                <p>Abcd@gmail.com</p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-start">
                <p className="mx-2 my-2 py-2 px-2 font-bold">LINKS</p>
                <div  className="flex mx-2 my-2 items-center">
                <img className="h-8 mx-1" src="https://img.icons8.com/ios-glyphs/90/000000/github.png" alt = ""/>
                <p>Github</p>
                </div>
            </div >

        </footer>
    )

}

export default Footer;