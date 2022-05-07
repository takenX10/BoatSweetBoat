import './footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (

<footer id='footerTemplate' class="text-center text-lg-start bg-light text-muted">
  
<section
    class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
  >
    <div class="me-5 d-none d-lg-block">
    </div>

    
  </section>
  <section >
    <div class="container text-center text-md-start mt-5">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>About Marta
          </h6>
          <p>
          Per Marta la vela, oltre che sport e lavoro, è il sogno di vivere in mare. Infatti a 28 anni ha lasciato la terraferma per vivere nella sua "barca dolce barca" e si prepara per il grande sogno: il giro del mondo. Seguitela per viaggiare con lei.
          </p>
        </div>

        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            Collegamenti suggeriti
          </h6>
          <p>
            <a href="#" class="text-reset">Home</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Esplora barca</a>
          </p>
          <p>
            <a href="https://www.gofundme.com/f/italiaavela?utm_campaign=p_na+share-sheet&utm_medium=copy_link&utm_source=customer" class="text-reset">Raccolta fondi</a>
          </p>
         
        </div>

        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            Contatti
          </h6>
          <p><i class="fas fa-home me-3" />Lega Navale Italiana, Via Caboto, CA, Sardegna</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            <a class="text-reset" href="mailto:marta.boatsweetboat@gmail.com">marta.boatsweetboat@gmail.com</a>
          </p>
          <p><i class="fas fa-phone me-3"></i> +39 320 353 7150</p>
          <a href="https://www.facebook.com/martamagnano.boatsweetboat" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="https://www.instagram.com/marta_magnano/" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </a>
      </div>
      </div>
    </div>
  </section>

  <div class="text-center p-4" id="copyright">
    Designed by <a class="text-reset fw-bold" href="https://github.com/takenX10"  alt="">takenX10</a> and <a class="text-reset fw-bold" href="https://github.com/https://github.com/VittoriaFrau" alt="">VittoriaFrau</a><a className="px-3 text-dark fs-4" href="https://github.com/takenX10/BoatSweetBoat" alt="github source code"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
  </div>

</footer>
 );
};

export default Footer;