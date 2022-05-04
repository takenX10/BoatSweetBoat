import "./Navbar.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container-fluid align-items-center flex-nowrap m-0 p-0">
                    <b><a className="navbar-brand logo my-0 p-0 mx-2 ms-2" href="#">BoatSweetBoat</a></b>
                    <button className="navbar-toggler m-0 p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon me-3"><FontAwesomeIcon className="hamburger-icon" icon={faBars} /></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end me-5" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-3">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#">Esplora Barca</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#">Contattami</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#">FAQ</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};