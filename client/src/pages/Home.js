import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

import './home.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid p-0 m-0">
        <div className="row p-0 m-0">
          <div className="heading-image" role="img" aria-label='Immagine principale che raffigura la barca di Marta'></div>
        </div>
      </div>
      <div className="container-fluid justify-content-center p-5">
        <div className="row text-center justify-content-center b">
            <div className="col-12 col-md-10 col-lg-9 justify-content-center">
              <h2 className='text-start fs-1 mb-4'><i><b>MARTA MAGNANO</b></i></h2>
              <p className='fs-3 text-start'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo veritatis consectetur iusto quam nulla, exercitationem ipsam neque eum suscipit ad aut minus ipsum nemo? Omnis dolore non sit neque voluptatum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus consectetur reprehenderit nesciunt consequuntur sed rerum libero dolores itaque dolore excepturi nisi nam consequatur doloribus architecto est culpa, autem minus illo! </p>
            </div>
        </div>
      </div>
      
      <div className="container-fluid p-5">
        <div className="row text-center justify-content-end b">
            <div className="col-12 col-md-10 col-lg-9 justify-content-center">
              <h2 className='text-end fs-1 mb-4'><i><b>SPONSOR</b></i></h2>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <img src='/images/slam-logo.jpeg' className='img-fluid' alt='slam logo'></img>
            </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
