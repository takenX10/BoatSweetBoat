import "./Navbar.scss"
import React, { useState, useEffect, useRef } from 'react';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Slide from '@mui/material/Slide'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [currentView, setCurrentView] = useState({top: 0, left: 0});
    const navbarTitle = useRef(); 
    const changeNavbar = () => {
        if (window.scrollY > 100) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNavbar);
        return (() => {
            window.removeEventListener('scroll', changeNavbar)
        }
        );
    }, []);

    useEffect( ()=> {
        if(scrolled){
            setTimeout(()=> {
                navbarTitle.current.className += " nospace";
            }, 300);
        }else{
            navbarTitle.current.className = navbarTitle.current.className.replace(" nospace", "")
        }
    }, [scrolled])

    function disableScrolling(){
        var x=window.scrollX;
        var y=window.scrollY;
        window.onscroll=function(){window.scrollTo(x, y);};
    }
    
    function enableScrolling(){
        window.onscroll=function(){};
    }

    useEffect(()=>{
        if(expanded){
            disableScrolling();
        }else{
            enableScrolling();
        }
    }, [expanded]);

    return (
        <>
            <Slide in={expanded} direction="left" mountOnEnter unmountOnExit>
                <div className="container-fluid expanded-navbar" style={{top: currentView.top,left: currentView.left}}>
                    <div className="row text-end me-5 mt-5 fs-1 text-underline">
                        <div className="col-12 m-3">
                            <button className="navbar-button-expanded m-0 p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={() => {setExpanded(!expanded);}}>
                                <span className="navbar-toggler-icon me-4"><FontAwesomeIcon className="hamburger-icon" icon={faBars} /></span>
                            </button>
                        </div>
                        <div className="col-12 m-3">
                            <a className="nav-expanded-link active fw-bold fs-1" aria-current="page" href="#/">Home</a>
                        </div>
                        <div className="col-12 m-3">
                            <a className="nav-expanded-link fs-1 fw-bold" href="#/esplora-imbarcazione">Esplora Barca</a>
                        </div>
                        <div className="col-12 m-3">
                            <HashLink to="/#contattami" className="nav-expanded-link fs-1 fw-bold" onClick={()=>{setExpanded(!expanded)}}>Contattami</HashLink>
                        </div>
                        <div className="col-12 m-3">
                            <a className="nav-expanded-link fw-bold" href="#/faq">FAQ</a>
                        </div>
                        <div className="col-12 m-3">
                            <a className="nav-expanded-link fw-bold" href="https://www.gofundme.com/f/italiaavela?utm_campaign=p_na+share-sheet&utm_medium=copy_link&utm_source=customer">Raccolta fondi</a>
                        </div>
                        <div className="col-12 m-3">
                            <a href="https://www.instagram.com/marta_magnano/" className="nav-expanded-link fw-bold">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </Slide>
            <nav className={`navbar navbar-expand-lg ${scrolled ? "navbar-style-collapsed" : "navbar-style"} fixed-top`}>
                <div className="container-fluid align-items-center m-0 p-0 p-lg-5">
                    <b><a className={`navbar-brand logo my-0 p-0 mx-2 ms-2 ${scrolled ? "hidden" : ""}`} ref={navbarTitle} href="#/">Boat Sweet Boat</a></b>
                    <button className="navbar-toggler m-0 p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={() => { setCurrentView({top: window.pageYOffset, left: window.pageXOffset});setExpanded(!expanded); }}>
                        <span className="navbar-toggler-icon me-4"><FontAwesomeIcon className="hamburger-icon" icon={faBars} /></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end me-5" id="navbarNav">
                        <ul className="navbar-nav">
                           
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#/esplora-imbarcazione">Esplora Barca</a>
                            </li>
                            <li className="nav-item mx-3">
                                <HashLink className="nav-link" to="/#contattami">Contattami</HashLink>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#/faq">FAQ</a>
                            </li>
                            
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="https://www.gofundme.com/f/italiaavela?utm_campaign=p_na+share-sheet&utm_medium=copy_link&utm_source=customer">Raccolta fondi</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a href="https://www.instagram.com/marta_magnano/" className="nav-link">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};