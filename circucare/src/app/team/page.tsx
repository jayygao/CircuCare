"use client"
import React from 'react'
import './team.css'
import NavBar from './../navbar/navbar'
import data from '../team-data/team-data'
import inputData from '../team-data2/team-data2'

export default function teamPage() {
    const images = data;
    const images2 = inputData;

    return (
        <div className = "background-container">
            <div className = "top-bar">
                <NavBar/>
            </div>
            <div className = "main-container">
                <div className ="sub-container">
                    <div className = "title-main">
                        <h1> Advisory Board </h1>
                    </div>
                    <div className = "main-cards">
                        {
                            images.map(data => (
                                <div className='cards-container'>
                                    <div className = 'teamNames'>
                                        {data.name}
                                    </div>
                                    <a href={data.link}><img src={data.src} alt="photos" className='teamImages'/></a>
                                    <div className = 'teamData'>
                                        {data.text}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className = "title-secondary">
                        <h1> Excutive Team </h1>
                    </div>
                    <div className = "sub-cards">
                        {
                            images2.map(inputData => (
                                <div className='sub-cards-container'>
                                    <div className = 'teamNames-2'>
                                        {inputData.name2}
                                    </div>
                                    <a href={inputData.link2}><img src={inputData.src2} alt="photos2" className='teamImages-2'/></a>
                                    <div className = 'teamData-2'>
                                        {inputData.text2}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}