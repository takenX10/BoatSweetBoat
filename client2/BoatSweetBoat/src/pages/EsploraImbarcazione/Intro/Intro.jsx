import React from "react";
import { Link } from "react-router-dom";

import "./Intro.scss";

const FullButton = ({text, dest}) => {
    return (
        <Link to={dest} className='col-10 col-md-5 text-center m-3 full-button rounded-3' style={{textDecoration: 'none', alignItems:'center', display:'flex', justifyContent:'center'}}><h2 className='button-text'>{text}</h2></Link>
    );
  };

export default function Intro(){
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