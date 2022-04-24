import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

  library.add(fab, faCheckSquare, faCoffee)

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="col">
                    <a className="navbar-brand p-2 fs-1 fw-bolder m-lg-5 m-0" href="#">BoatSweetBoat</a>
                </div>
                <div className="col justify-content-end text-end m-0 m-lg-5">
                    <a href='#' className='text-end p-3 fs-3 text-reset logo'>  <FontAwesomeIcon icon={faFacebook} /></a>
                    <a href='#' className='text-end p-3 fs-3 text-reset logo'>  <FontAwesomeIcon icon={faInstagram} /></a>
                </div>
                <div className="col justify-content-end text-end my-5 m-0 m-lg-5">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end fs-3" id="navbarNavAltMarkup">
                        <div className="navbar-nav justify-content-end text-center">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            <a className="nav-link" href="#">Esplora Imbarcazione</a>
                            <a className="nav-link" href="#">Contattami</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </nav>
        </>
    );
};
  
export default Navbar;
  