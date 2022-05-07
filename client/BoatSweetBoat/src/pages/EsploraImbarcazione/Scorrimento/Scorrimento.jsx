import React from "react";
import { Parallax } from 'react-scroll-parallax';

import Navbar from "@/layouts/Navbar";
import Footer from "@/layouts/Footer";

import "./Scorrimento.scss"

const Card = ({description, position, imageSource, imageAlt}) => {
    return (
      <div className="container-fluid card-container d-flex justify-content-center p-0 m-0">
            <div className="row justify-content-center">
                <div className="col-12 card-image" style={{backgroundImage:`url(${imageSource})`}}></div>
                <Parallax translateY={[-20, 20]}>
                    <div className="col-10 pt-5 px-4 card-position-col justify-content-center align-items-start">
                        <h2 className="card-position fs-1 text-underline my-5">{position}</h2>
                        <p className='card-description mb-5 pb-5'>{description}</p>
                    </div>
                </Parallax>
            </div>
        </div>
    );
  }

export default function Scorrimento({cardList}){
    return (
      <>
        <Navbar />
        <div className="container-fluid cards-box mt-5 pt-5 mx-0 mb-0 px-0 pb-0">
            {cardList.map(card => <Card description={card.description} key={card.position} position={card.position} imageSource={card.imageSource} imageAlt={card.imageAlt} />)}
        </div>
        <Footer />
      </>
    );
};