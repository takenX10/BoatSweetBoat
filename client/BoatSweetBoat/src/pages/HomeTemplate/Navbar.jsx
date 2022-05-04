import './home.scss';
import "./Navbar.scss"
export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid align-items-center flex-nowrap m-0 p-0">
                    <a className="navbar-brand logo my-0 p-0 mx-2 ms-2" href="#"><b>BoatSweetBoat</b></a>
                    <button className="navbar-toggler m-0 p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon me-3"><i className="fa-solid fa-bars hamburger-icon"></i></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end me-5" id="navbarNav">
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

/*
<nav className="navbar navbar-light bg-light fixed-top navbar-scroll">
           <div className="container col-8">
           <a className="navbar-brand" href="#!"><img src='http://localhost:3000/images/logo.png' /></a>
           </div>
                <div className="container col-4">
                    <a className="navbar-brand" href="/">Home</a>
                    <a className="navbar-brand" href="#signup">Esplora l'imbarcazione</a>
                    <a className="navbar-brand" href="#signup">Contattami</a>

                </div>
            </nav>



            //
            <div class="container-fluid main-nav ">
                <div class="row">
                    <div class="container">
                        <nav id="topNav" class="navbar navbar-expand-lg">
                            <div class="navbar-brand mex-auto logo container col-8"> <a href="#"><img src="http://localhost:3000/images/logo.png" /></a> </div>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"> <span>Menu</span></button>
                            <div class="navbar-collapse collapse container col-4">
                                <a className="navbar-brand" href="/">Home</a>
                                <a className="navbar-brand" href="#signup">Esplora l'imbarcazione</a>
                                <a className="navbar-brand" href="#signup">Contattami</a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            */