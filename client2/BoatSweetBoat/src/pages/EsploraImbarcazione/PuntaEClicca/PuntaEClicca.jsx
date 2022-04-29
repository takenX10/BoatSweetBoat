import React, { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCircleArrowLeft, faCircleArrowDown, faCircleArrowRight, faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import "./PuntaEClicca.scss";

export default function PuntaEClicca() {
    const data = [
        {
            image: "boat.jpeg", left: 0, right: 0, up: 0, down: 1,
            title: "Titolo numero 1",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet est id facilis consequatur tempora cum assumenda excepturi veniam repellat. Vel voluptates tempora excepturi consectetur doloribus dolor fugit repellendus necessitatibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatum quibusdam obcaecati necessitatibus dignissimos labore possimus, alias eius commodi quis, assumenda eligendi nisi praesentium cumque libero? Sed, similique. Quia, nobis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quidem nobis, facere minus maxime porro voluptatibus reiciendis nisi dolorum qui alias facilis nulla at et libero assumenda expedita deleniti provident."
        },
        {
            image: "cabin.jpg", up: 0,
            title: "Titolo 2",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet est id facilis consequatur tempora cum assumenda excepturi veniam repellat. Vel voluptates tempora excepturi consectetur doloribus dolor fugit repellendus necessitatibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatum quibusdam obcaecati necessitatibus dignissimos labore possimus, alias eius commodi quis, assumenda eligendi nisi praesentium cumque libero? Sed, similique. Quia, nobis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quidem nobis, facere minus maxime porro voluptatibus reiciendis nisi dolorum qui alias facilis nulla at et libero assumenda expedita deleniti provident."
        },
    ];
    const types = [
        { text: "left", icon: faCircleArrowLeft },
        { text: "right", icon: faCircleArrowRight },
        { text: "up", icon: faCircleArrowUp },
        { text: "down", icon: faCircleArrowDown },
    ];
    const [currentType, setCurrentType] = useState("down");
    const [currentData, changeCurrentData] = useState(0);
    return (
        <div className="container-fluid full-container">
            <TransitionGroup>
                <CSSTransition 
                    key={data[currentData].image}
                    timeout={1000}
                    classNames={`fade-${currentType}`}>
                    <img src={`/images/${data[currentData].image}`} alt="" className="full-image"></img>
                </CSSTransition>
            </TransitionGroup>
            <div className="grid">
                <button className="arrow back"><FontAwesomeIcon icon={faHouse} /> </button>
                {types.map(type => {
                    if (data[currentData][type.text] === undefined) {
                        return (<></>);
                    } else {
                        return (
                            <button key={type.text} className={`arrow ${type.text}`}
                                onClick={() => { setCurrentType(type.text); changeCurrentData(data[currentData][type.text]); }}>
                                <FontAwesomeIcon icon={type.icon} />
                            </button>
                        );
                    }
                })
                }
                <div className="text-area">
                </div>
                <h1 className="title">{data[currentData].title}</h1>
                <p className="description-text px-3">{data[currentData].description}</p>
            </div>
        </div>
    );
};