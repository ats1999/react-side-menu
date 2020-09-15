import React,{useState} from "react";
import NavLinks from "./NavLinks";
import Toggle from "./Toggle";
import Content from "./Content";
import "./side-menu.css";
import "./close-menu.css";

const navLinks=["Home","About","Login","SignUp",
    "Home","About","Login","SignUp",
    "Home","About","Login","SignUp",
    "Home","About","Login","SignUp",
    "Home","About","Login","SignUp",
    "Home","About","Login","SignUp",
    "Home","About","Login","SignUp",
    "Home","About","Login","SignUp",
    "Home","About","Login","SignUp",
    "Home","About","Login","SignUp",]

export default function SideMenu(){    
    let [menuClass,setMenuClass] = useState("nav-bar menu-default");

    return <div className="root">
            <Toggle 
                menuClass={menuClass} 
                setMenuClass={setMenuClass}/>

            <div className={menuClass}>
                {/* Close menu button */}
                <CloseMenu 
                    menuClass={menuClass} 
                    setMenuClass={setMenuClass}/>

                    {/* Menu links */}
                <NavLinks navLinks={navLinks}/>
            </div>

        {/* content */}
        <div className="not-nav">
            <Content/>
            <Content/>
            <Content/>
            <Content/>
            <Content/>
        </div>
    </div>
}

function CloseMenu({menuClass,setMenuClass}){
    if(menuClass==="nav-bar menu-opened")
        return <button 
            id="close-menu" 
            onClick={()=>setMenuClass("nav-bar menu-closed")}
            >X</button>
    return null;
}