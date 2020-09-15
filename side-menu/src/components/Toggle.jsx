import React,{useState} from "react";
import "./toggle.css";
export default function({menuClass,setMenuClass}){
    if(menuClass === "nav-bar menu-default" || menuClass==="nav-bar menu-closed")
        return <button   
            id="toggle-menu"
            onClick={()=>setMenuClass("nav-bar menu-opened")}>
            <i className="fa fa-bars" aria-hidden="true"></i>
        </button>
    return null;
}