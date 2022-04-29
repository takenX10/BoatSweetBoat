import './footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <div id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 footer-links">
                                <h4>Collegamenti suggeriti</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Esplora barca</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="https://www.gofundme.com/f/italiaavela?utm_campaign=p_na+share-sheet&utm_medium=copy_link&utm_source=customer">Raccolta fondi</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-6 footer-contact">
                                <h4>Contatti</h4>
                                <p> Lega Navale Italiana, <br/>  Via Caboto, <br/> Cagliari, <br/> Sardegna<br/><br/> <strong>Phone:</strong> +39 320 353 7150<br/> <strong>Email:</strong> <a className="linkmail" href="mailto:marta.boatsweetboat@gmail.com">marta.boatsweetboat@gmail.com</a><br/> </p>
                            </div>
                            <div className="col-lg-4 col-md-6 footer-info">
                                <h3>ABOUT Marta</h3>
                                <p>Per Marta la vela, oltre che sport e lavoro, è il sogno di vivere in mare. Infatti a 28 anni ha lasciato la terraferma per vivere nella sua "barca dolce barca" e si prepara per il grande sogno: il giro del mondo. Seguitela per viaggiare con lei.</p>
                                <div className="social-links mt-3">
                                    <a href="#" className="twitter" aria-label="twitter link"><i className="fab fa-twitter"></i></a>
                                    <a href="https://www.facebook.com/martamagnano.boatsweetboat" className="facebook" aria-label="facebook link"><i className="fab fa-facebook"></i></a> <a href="https://www.instagram.com/marta_magnano/" className="instagram" aria-label="instagram link"><i className="fa-brands fa-instagram"></i></a>
                                    <a href="#" className="linkedin" aria-label="linkedin link"><i className="fab fa-linkedin"></i></a> </div>
                            </div>
                        </div>
                    </div>
                </div>
    <div className="container">
        <div className="copyright"> © Copyright <strong><span>?</span></strong>. All Rights Reserved </div>
        <div className="credits"> Designed by <a href="https://github.com/takenX10" className="linkmail" alt="">takenX10</a> and <a href="https://github.com/https://github.com/VittoriaFrau" className="linkmail" alt="">VittoriaFrau</a>   </div>
    </div>
</div>
    );
};

export default Footer;