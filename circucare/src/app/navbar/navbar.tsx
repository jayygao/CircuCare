import React from 'react'
import './navbar.css'
import Link from 'next/link';


export default function navbar() {
    return (
        <div className = "container">
            <div className = "navigation">
                <div className = "logo"> 
                    <a href="/" >
                        <img
                        src="/circucare-clear.png"
                        alt="placeholder logo"
                        />
                    </a>
                </div>
                <div className = "title">
                    <Link href='/' style={{textDecoration: 'none'}}>CircuCare</Link>
                </div>
                <div className = "navButtons">
                    <Link href='/team' style={{textDecoration: 'none'}}>Team</Link>
                    <Link href='/contact' style={{textDecoration: 'none'}}>Contact Us</Link>
                </div>
            </div>
        </div>
    )
}