import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

import './home.scss';

const HeadingImage = ({imageLabel}) =>{
  return (
    <div className="container-fluid p-0 m-0">
      <div className="row p-0 m-0">
        <div className="heading-image" role="img" aria-label={imageLabel}></div>
      </div>
    </div>
  );
}

const Description = ({ title, description }) => {
  return(
    <div className="container-fluid justify-content-center my-5 description-container p-4 ps-0">
        <div className="row text-center justify-content-center">
            <div className="col-1 spacer"></div>
            <div className="col-11 col-md-10 col-lg-9 justify-content-center content-div py-3">
              <h2 className='text-start fs-1 mb-4 title-description'><i><b>{title}</b></i></h2>
              <p className='fs-3 text-start'>{description}</p>
            </div>
            <div className="d-hidden d-md-block col-md-1 col-lg-2"></div>
        </div>
    </div>
  );
}

const SponsorLogo = ({image, alt}) => {
  return (
    <div className="col-4">
      <img src={image} className='img-fluid' alt={alt}></img>
    </div>
  );
}

const Sponsor = ({sponsorList}) => {
  return (
    <div className="container-fluid p-5">
        <div className="row text-center justify-content-center b">
            <div className="col-9">
              <h2 className='text-end fs-1 mb-4 title-description'><i><b>SPONSOR</b></i></h2>
            </div>
            { sponsorList.map(sponsor => <SponsorLogo image={sponsor.image} alt={sponsor.alt} />) }
        </div>
      </div>
  );
}

const Home = () => {
  let title = 'MARTA MAGNANO';
  let descriptionText = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo veritatis consectetur iusto quam nulla, exercitationem ipsam neque eum suscipit ad aut minus ipsum nemo? Omnis dolore non sit neque voluptatum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus consectetur reprehenderit nesciunt consequuntur sed rerum libero dolores itaque dolore excepturi nisi nam consequatur doloribus architecto est culpa, autem minus illo!`;
  let sponsorList = [
    {
      'image':'/images/slam-logo.jpeg',
      'alt':'alt2'
    },
    {
      'image':'/images/slam-logo.jpeg',
      'alt':'alt2'
    }
  ];
  return (
    <>
      <HeadingImage imageLabel={'Immagine principale che raffigura la barca di Marta'} />
      <Navbar />
      <Description title={title} description={descriptionText}/>
      <Sponsor sponsorList={sponsorList}/>
      <Footer />
    </>
  );
};

export default Home;
