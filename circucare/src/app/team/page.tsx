"use client"
import React from 'react'
import './team.css'
import NavBar from './../navbar/navbar'
import data from '../team-data/team-data'

export default function teamPage() {
    const images = data;

    return (
        <div className = "main-container">
            <div className = "top-bar">
                <NavBar/>
            </div>
            <div className ="sub-container">
                <div className = "textInfo">
                    <h1> Meet the Team </h1>
                </div>
                <div className = "dataInput">
                    {
                        images.map(data => (
                            <div className='cards'>
                                <div className = 'teamNames'>
                                    {data.name}
                                </div>
                                <img src={data.src} alt="photos" className='teamImages'/>
                                <div className = 'teamData'>
                                    {data.text}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}