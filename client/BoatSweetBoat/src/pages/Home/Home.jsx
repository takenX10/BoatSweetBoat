import React, {useState} from 'react';
import Navbar from '@/layouts/Navbar';
import Footer from '@/layouts/Footer';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';

import './Home.scss';


const   Hero = ({img, imgAlt}) => {
    return (
        <>
            <div className="container-fluid hero-container mx-0 px-0">
                <div className="row hero-row mx-0">
                    <div className="col px-0 hero-image-container" style={{backgroundImage: `url(${img})`}}>

                        <div className="black-rect" aria-roledescription='spacer'></div>
                        <div className="d-grid hero-grid">
                            <h1 className="hero-title m-3">Marta<br/> Magnano</h1>
                            <h3 className="hero-description m-3">Per chi ama <br/><b>viaggiare</b></h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


const About = ({title, description}) => {
    return (
        <>
            <div className="container-fluid my-5 ps-5">
                <div className="row">
                    <div className="col">
                        <h1 className="about-title my-5">Chi sono?</h1>
                        <p className='about-description text-wrap my-5'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, id rem vero sequi quasi, commodi eveniet eaque quod at possimus consectetur error perferendis omnis itaque a maiores soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nam.
                        </p>
                    </div>
                    
                </div>
            </div>
        </>
    );
};

const EsploraLink = ({img, imgAlt}) => {
    return (
        <div className="container-fluid esplora-container">
            <div className="esplora-img-container" style={{backgroundImage: `url(${img})`}}>
            </div>
            <div className="esplora-grid">
                <h1 className='esplora-title ps-3'>
                    Esplora la <br/>
                    barca
                </h1>
                <p className='esplora-description ps-3'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
                <button className='esplora-button ms-3 p-3'>Incomincia!</button>
            </div>
        </div>
    );
};


const Sardegna = () => {
    return (
        <div className="container-fluid sardegna my-5">
            <img src="/images/sardegna.png" alt="cartina della sardegna" className='sardegna-img'></img>
        </div>
    );
};
/*
    {
        sponsor: 
            {
                img:"/images/name1.png", 
                alt:"alt for name2.png"
            },
        nomine:
            {
                img:"/images/name2.png", 
                alt:"alt for name2.png"
            }
    }

 */
const Sponsor = ({imgList}) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [currentImageNomine, setCurrentImageNomine] = useState(0);
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="container-fluid">
                            <div className="row justify-content-center align-items-center my-5">
                                <div className="col-12">
                                    <h1 className='sponsor-title'>Sponsor</h1>
                                </div>
                                <div className="col-2 icon">
                                    <FontAwesomeIcon 
                                        icon={faChevronLeft} 
                                        onClick={() => {
                                                currentImage == 0 ? setCurrentImage(imgList.sponsor.length - 1):setCurrentImage(currentImage - 1);
                                            }
                                        }
                                    />
                                </div>
                                <div className="col-8 sponsor-image-container">
                                    <img src={imgList.sponsor[currentImage].img} alt={imgList.sponsor[currentImage].alt} className="sponsor-image"></img>
                                </div>
                                <div className="col-2 icon">
                                    <FontAwesomeIcon 
                                        icon={faChevronRight} 
                                        onClick={() => {
                                                currentImage == (imgList.sponsor.length - 1) ? setCurrentImage(0):setCurrentImage(currentImage + 1);
                                            }
                                        }
                                    />
                                </div>
                             </div>
                        </div>
                     </div>
                     <div className="col-12 col-lg-6">
                        <div className="container-fluid">
                            <div className="row justify-content-center align-items-center my-5">
                                <div className="col-12">
                                    <h1 className='sponsor-title'>Nomine</h1>
                                </div>
                                <div className="col-2 icon">
                                    <FontAwesomeIcon 
                                        icon={faChevronLeft} 
                                        onClick={() => {
                                                currentImageNomine == 0 ? setCurrentImageNomine(imgList.nomine.length - 1):setCurrentImageNomine(currentImageNomine - 1);
                                            }
                                        }
                                    />
                                </div>
                                <div className="col-8 sponsor-image-container">
                                    <img src={imgList.nomine[currentImageNomine].img} alt={imgList.nomine[currentImageNomine].alt} className="sponsor-image"></img>
                                </div>
                                <div className="col-2 icon">
                                    <FontAwesomeIcon 
                                        icon={faChevronRight} 
                                        onClick={() => {
                                                currentImageNomine == (imgList.nomine.length - 1) ? setCurrentImageNomine(0):setCurrentImageNomine(currentImageNomine + 1);
                                            }
                                        }
                                    />
                                </div>
                             </div>
                         </div> 
                     </div>
                 </div>
            </div>
        </>
    );
}

export default function Home(){
    const sponsorList = {
        sponsor: [
            {
                img:"/images/slam-logo.jpeg",
                alt:"logo di slam"
            },
            {
                img:"/images/slam-logo.jpeg",
                alt:"logo di slam"
            },
            {
                img:"/images/slam-logo.jpeg",
                alt:"logo di slam"
            },
        ],
        nomine: [
            {
                img:"/images/slam-logo.jpeg",
                alt:"logo di slam"
            },
            {
                img:"/images/slam-logo.jpeg",
                alt:"logo di slam"
            },
            {
                img:"/images/slam-logo.jpeg",
                alt:"logo di slam"
            },
        ]
    }
    return (
        <>
            <Navbar />
            <Hero img="/images/book.jpeg" imgAlt=""/>
            <About />
            <EsploraLink img="/images/front-boat.jpeg" imgAlt=''/>
            <Sponsor imgList={sponsorList}/>
            <Sardegna />
            <Footer />
        </>
    );
};