import React from 'react'
import "./MainContent.css"
import MainContentLeft from './MainContentLeft'
import MainContentRight from './MainContentRight'

export default function MainContent() {
    return (
        <div className="main-content">
            <MainContentLeft/>
            <MainContentRight/>
        </div>
    )
}