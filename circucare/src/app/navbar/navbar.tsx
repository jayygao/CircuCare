"use client";

import React, { useState } from 'react'
import './navbar.css'
import Link from 'next/link';

export default function navbar() {
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 40) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    window.addEventListener('scroll', changeColor)

    return (
        <div className = "container">
            <div className={`navigation ${color ? 'navigation-bg' : ''}`}>
                <div className = "logo"> 
                    <a href="/" >
                        <img
                        src="/circucare-clear.png"
                        alt="placeholder logo"
                        />
                    </a>
                </div>
                <div className={`title ${color ? 'title-bg' : ''}`}>
                    <Link href='/' style={{textDecoration: 'none'}}>CircuCare</Link>
                </div>
                <div className={`navButtons ${color ? 'navButtons-bg' : ''}`}>
                    <Link href='/team' style={{textDecoration: 'none'}}>Team</Link>
                    <Link href='/contact' style={{textDecoration: 'none'}}>Contact Us</Link>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <span />
                    <span />
                    <span />
                </div>
                <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
                    <Link href='/team' style={{textDecoration: 'none'}}>Team</Link>
                    <Link href='/contact' style={{textDecoration: 'none'}}>Contact Us</Link>
                </div>
            </div>
        </div>
    )
}