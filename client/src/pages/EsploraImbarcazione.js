import React from "react";
import {
Routes,
Route,
Link
} from "react-router-dom";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

import './EsploraImbarcazione.css'

const FullButton = ({text, dest}) => {
  return (
      <Link to={dest} className='col-10 col-md-5 text-center m-3 full-button rounded-3' style={{textDecoration: 'none', alignItems:'center', display:'flex', justifyContent:'center'}}><h2 className='button-text'>{text}</h2></Link>
  );
};

const Intro = () => {
  return (
    <div className="container-fluid bg-dark">
      <div className="row justify-content-around align-items-center buttons-container">
        <div className="container-fluid heading-container">
          <h1 className="heading-text col-12 text-center p-5 text-light">Preferisci un avventura</h1>
        </div>
        <FullButton text='Punta e clicca' dest='/esplora-imbarcazione/punta-e-clicca'/>
        <FullButton text='Scorrimento' dest='/esplora-imbarcazione/scorrimento'/>
      </div>
    </div>
  );
};


const PuntaEClicca = () => {
  return (
    <h1>PuntaEClicca</h1>
  );
};

const Card = ({description, position, imageSource, imageAlt}) => {
  //#006992 dark
  //#89c4f4 light
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

const Scorrimento = ({cardList}) => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row justify-content-center m-4">
          <div className="col-lg-8 col-md-12 col-12">
            {cardList.map(card => <Card description={card.description} key={card.position} position={card.position} imageSource={card.imageSource} imageAlt={card.imageAlt} />)}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

function EsploraImbarcazione () {
  var lista = [
    {
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate mollitia reiciendis fuga tenetur omnis iusto quam, adipisci aliquam quaerat ullam. Laboriosam doloribus et ea magni adipisci iure sunt quas veritatis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate mollitia reiciendis fuga tenetur omnis iusto quam, adipisci aliquam quaerat ullam. Laboriosam doloribus et ea magni adipisci iure sunt quas veritatis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate mollitia reiciendis fuga tenetur omnis iusto quam, adipisci aliquam quaerat ullam. Laboriosam doloribus et ea magni adipisci iure sunt quas veritatis.',
      position: 'Davanti Alla Barca',
      imageSource: '/images/entry.jpeg',
      imageAlt: 'test alt'
    },
    {
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate mollitia reiciendis fuga tenetur omnis iusto quam, adipisci aliquam quaerat ullam. Laboriosam doloribus et ea magni adipisci iure sunt quas veritatis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate mollitia reiciendis fuga tenetur omnis iusto quam, adipisci aliquam quaerat ullam. Laboriosam doloribus et ea magni adipisci iure sunt quas veritatis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate mollitia reiciendis fuga tenetur omnis iusto quam, adipisci aliquam quaerat ullam. Laboriosam doloribus et ea magni adipisci iure sunt quas veritatis.',
      position: 'Dietro la barca',
      imageSource: '/images/cabin.jpg',
      imageAlt: 'test alt'
    }
  ]
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path='scorrimento' element={<Scorrimento cardList={lista}/>} />
      <Route path='punta-e-clicca' element={<PuntaEClicca />} />
    </Routes>
  );
}

export default EsploraImbarcazione;
