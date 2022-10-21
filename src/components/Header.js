import "./header.css"
import React from "react"

export default function Header() {
    return (
        <div className="profile">
                <img className="profile-photo" src="https://wallpaperaccess.com/full/2235021.jpg" alt="profile-pic"/>
                <h1 className="profile-name">Nikhil Wanjare</h1>
                <h3 className="profile-job">Frontend Developer</h3>
                <h6 className="profile-website">onejar.website</h6>
                <button className="profile-email">Email</button>
        </div>
        
    );
};