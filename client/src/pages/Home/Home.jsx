import React, { useState } from 'react';
import Navbar from '../../layouts/Navbar';
import Footer from '../../layouts/Footer';
import TypeWriterEffect from 'react-typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { validateForm } from './ContactFormValidation';
import './Home.scss';


const Hero = ({ img, imgAlt }) => {
    return (
        <>
            <div className="container-fluid hero-container mx-0 px-0">
                <div className="row hero-row mx-0">
                    <div className="col px-0 hero-image-container" style={{ backgroundImage: `url(${img})` }}>

                        <div className="black-rect" aria-roledescription='spacer'></div>
                        <div className="d-grid hero-grid px-lg-5">
                            <h1 className="hero-title m-3 mx-lg-5">Marta<br /> Magnano</h1>
                            <h3 className="hero-description m-3 mx-lg-5">Per chi ama <br />
                                <b>
                                    <TypeWriterEffect
                                        textStyle={{
                                            fontFamily: 'Playfair Display',
                                            color: '#1ac0c6',
                                            fontWeight: 500,
                                            fontSize: '2.441rem',
                                            textAlign: 'end'
                                        }}
                                        startDelay={1000}
                                        cursorColor="#12878b"
                                        multiText={[
                                            'viaggiare',
                                            'navigare',
                                            'veleggiare',
                                            'esplorare',
                                            'marta',
                                        ]}
                                        multiTextDelay={3000}
                                        multiTextLoop={true}
                                        typeSpeed={100}
                                    />
                                </b>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


const About = ({ img }) => {
    return (
        <>
            <div className="container-fluid about-container m-0 p-0">
                <div className="row about-row justify-content-center m-0 p-0">
                    <div className="col-10 col-lg-6 px-2 py-5 px-lg-5 about-text-container">
                        <h1 className="about-title my-5">Chi sono?</h1>
                        <p className='about-description text-wrap'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, id rem vero sequi quasi, commodi eveniet eaque quod at possimus consectetur error perferendis omnis itaque a maiores soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nam.
                        </p>


                    </div>
                    <div className="col-0 col-lg-6 d-none d-lg-flex about-image" style={{ backgroundImage: `url(${img})` }}></div>
                </div>
            </div>
        </>
    );
};

const EsploraLink = ({ img, imgAlt }) => {
    return (
        <div className="container-fluid esplora-container">
            <div className="esplora-img-container" style={{ backgroundImage: `url(${img})` }}>
            </div>
            <div className="row esplora-row d-flex justify-content-start align-items-start mt-5">
                <div className="col-7 esplora-col">
                    <h1 className='esplora-title mb-2 ps-5 mt-5 text-nowrap'>
                        Esplora<br />
                        la barca
                    </h1>
                    <p className='esplora-description ps-5 mb-2'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <a href='#/esplora-imbarcazione'>
                        <button className='esplora-button ms-5 p-3'>Incomincia!</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

const ContactForm = () => {
    return (
        <div id="contattami">
            <form name='contactForm' id='contactForm' onSubmit={validateForm}>
                <div className="form-group m-3">
                    <label htmlFor="exampleFormControlInput1" className="fs-5"><b className='form-label'>Email</b></label>
                    <input type="email" name='email' className="form-control" aria-label="email" required id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="form-group m-3">
                    <label htmlFor="exampleFormControlInput2" className="fs-5"><b className='form-label'>Nome</b></label>
                    <input type="name" name='name' aria-label="nome" className="form-control" required id="exampleFormControlInput3" placeholder="Marco Rossi" />
                </div>
                <div className="form-group m-3">
                    <label htmlFor="exampleFormControlTextarea1" className="fs-5"><b className='form-label'>Domanda</b></label>
                    <textarea className="form-control" name='message' aria-label="messaggio" required id="exampleFormControlTextarea1" rows="6"></textarea>
                </div>
                <button type='submit' className='esplora-button form-button p-3 m-3'>Invia!</button>
            </form>
        </div>
    );
};


const Sardegna = () => {
    const image = "/images/sardegna2.png";

    return (
        <>
            <div className="container-fluid sardegna my-5 pb-5 mb-5">
                <div className="row sardegna-container">
                    <div className="col-12 col-lg-6 sardegna-bg" style={{ backgroundImage: `url(${image})` }}>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center px-lg-0 px-4">
                        <ContactForm name="contattami" />
                    </div>
                </div>
            </div>
        </>
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
const Sponsor = ({ imgList }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [currentImageNomine, setCurrentImageNomine] = useState(0);
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="container-fluid">
                            <div className="row justify-content-center align-items-center my-5">
                                <div className="col-12 justify-content-center d-flex">
                                    <h1 className='sponsor-title text-center p-3'>Sponsor</h1>
                                </div>
                                <div className="col-2 icon">
                                    <FontAwesomeIcon
                                        icon={faChevronLeft}
                                        onClick={() => {
                                            currentImage === 0 ? setCurrentImage(imgList.sponsor.length - 1) : setCurrentImage(currentImage - 1);
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
                                            currentImage === (imgList.sponsor.length - 1) ? setCurrentImage(0) : setCurrentImage(currentImage + 1);
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
                                <div className="col-12 justify-content-center d-flex  ">
                                    <h1 className='sponsor-title p-3'>Stampa</h1>
                                </div>
                                <div className="col-2 icon">
                                    <FontAwesomeIcon
                                        icon={faChevronLeft}
                                        onClick={() => {
                                            currentImageNomine === 0 ? setCurrentImageNomine(imgList.nomine.length - 1) : setCurrentImageNomine(currentImageNomine - 1);
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
                                            currentImageNomine === (imgList.nomine.length - 1) ? setCurrentImageNomine(0) : setCurrentImageNomine(currentImageNomine + 1);
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

export default function Home() {
    const sponsorList = {
        sponsor: [
            {
                img: "/images/slam-logo.jpeg",
                alt: "logo di slam"
            },
            {
                img: "/images/slam-logo.jpeg",
                alt: "logo di slam"
            },
            {
                img: "/images/slam-logo.jpeg",
                alt: "logo di slam"
            },
        ],
        nomine: [
            {
                img: "/images/slam-logo.jpeg",
                alt: "logo di slam"
            },
            {
                img: "/images/slam-logo.jpeg",
                alt: "logo di slam"
            },
            {
                img: "/images/slam-logo.jpeg",
                alt: "logo di slam"
            },
        ]
    }
    return (
        <>
            <Navbar />
            <Hero img="/images/book.jpeg" imgAlt="" />
            <About img="/images/marta.jpeg" />
            <EsploraLink img="/images/front-boat.jpeg" imgAlt='' />
            <Sponsor imgList={sponsorList} />
            <Sardegna />
            <Footer />
        </>
    );
};