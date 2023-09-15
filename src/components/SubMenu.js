import React from 'react'
import "./SubMenu.css"
import Reload from '../images/Reload.png'

export default function SubMenu() {
    return (
        <div className="sub-menu">
            <span>Description</span>
            <a href="/">
                <span>Solutions</span>
            </a>
            <select name="languages" id="languages">
                <option value="Select Language">Select Language</option>
                <option value="CPP">CPP</option>
                <option value="Java">Java</option>
                <option value="Python">Python</option>
                <option value="C">C</option>
            </select>

            <a href="/">
                <img src={Reload} alt="Reload" />
            </a>
        </div>
    )
}
