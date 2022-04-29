import React from "react";
import { Routes, Route } from "react-router-dom";

import Scorrimento from "./Scorrimento/Scorrimento";
import Intro from "./Intro/Intro";
import PuntaEClicca from "./PuntaEClicca/PuntaEClicca";


export default function EsploraImbarcazione () {
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