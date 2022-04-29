import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

import './navbar.scss';
library.add(fab, faCheckSquare, faCoffee)

const Navbar = () => {
    var logos = [
        {icon:faFacebook,   link:'##',   label:'facebook link'}, 
        {icon:faInstagram,  link:'###',   label:'Instagram link'},
        {icon:faTwitter,    link:'#',   label:'facebook link'}
    ];
    return (
        <>
        <nav className="navbar navbar-expand-lg fixed-top navbar-scroll shadow-5-strong">
            <div className="container-fluid">
                <div className="col">
                    <a className="page-referer navbar-brand p-2 fs-1 fw-bolder m-lg-2 m-0" href="/">BoatSweetBoat</a>
                </div>
                <div className="col justify-content-end text-end m-0 m-lg-2">
                    {logos.map(logo => <a href={logo.link} key={logo.link} className='header-logo' aria-label={logo.label}><FontAwesomeIcon icon={logo.icon} /></a>)}
                </div>
                <div className="col justify-content-end text-end my-5 m-0 m-lg-4">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end fs-3" id="navbarNavAltMarkup">
                        <div className="navbar-nav justify-content-end text-center">
                            <a className="page-referer nav-link active mx-2" aria-current="page" href="#">Home</a>
                            <a className="page-referer nav-link mx-2" href="/esplora-imbarcazione">Esplora Imbarcazione</a>
                            <a className="page-referer nav-link" href="#">Contattami</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </nav>
        </>
    );
};
  
export default Navbar;
  