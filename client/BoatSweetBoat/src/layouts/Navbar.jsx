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
            <h1>ciao</h1>
        </>
    );
};
  
export default Navbar;
  