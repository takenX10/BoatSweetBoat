import "./Navbar.scss"
import React, { useState, useEffect } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const changeNavbar = () => {
        if(window.scrollY > 100){
            setScrolled(true);
        }else{
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll',  changeNavbar);
        return (() => {
                window.removeEventListener('scroll', changeNavbar)
            }
        );
    }, [])

    return (
        <>
            <nav className={`navbar navbar-expand-lg ${scrolled ? "navbar-style-collapsed":"navbar-style"} fixed-top`}>
                <div className="container-fluid align-items-center m-0 p-0 p-lg-5">
                    <b><a className={`navbar-brand logo my-0 p-0 mx-2 ms-2 ${scrolled?"hidden":""}`}  href="#">BoatSweetBoat</a></b>
                    <button className="navbar-toggler m-0 p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon me-4"><FontAwesomeIcon className="hamburger-icon" icon={faBars} /></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end me-5" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-3">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="/esplora-barca">Esplora Barca</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#contattami">Contattami</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="/faq">FAQ</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};