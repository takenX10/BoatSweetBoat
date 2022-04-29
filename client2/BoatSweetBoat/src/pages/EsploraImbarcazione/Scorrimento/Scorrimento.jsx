import React from "react";
import Navbar from "@/layouts/Navbar";
import Footer from "@/layouts/Footer";

import "./Scorrimento.scss"

const Card = ({description, position, imageSource, imageAlt}) => {
    return (
      <div className="container-fluid card-container d-flex justify-content-center p-0 m-4">
        <div className="row">
          <div className="col-12">
            <img src={imageSource} alt={imageAlt} className='card-image img-fluid'/>
          </div>
          <div className="col-12 pt-5 px-4">
            <h2 className="card-position">{position}</h2>
          </div>
          <div className="col-12 pt-1 px-4">
            <p className='card-description'>{description}</p>
          </div>
        </div>
      </div>
    );
  }

export default function Scorrimento({cardList}){
    return (
      <>
        <Navbar />
        <div className="container-fluid">
          <div className="row justify-content-center m-4">
            <div className="col-12 m-5 p-3" role="separator"></div>
            <div className="col-lg-8 col-md-12 col-12">
              {cardList.map(card => <Card description={card.description} key={card.position} position={card.position} imageSource={card.imageSource} imageAlt={card.imageAlt} />)}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
};