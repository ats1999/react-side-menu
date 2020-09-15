import React from "react";
export default function({navLinks}){
    const links = navLinks.map(link=>{
        return  <li>
            <a href={`#${link}`}>{link}</a> 
        </li>
    })
    return <nav>
        <ul>
            {links}
        </ul>
    </nav>
} 