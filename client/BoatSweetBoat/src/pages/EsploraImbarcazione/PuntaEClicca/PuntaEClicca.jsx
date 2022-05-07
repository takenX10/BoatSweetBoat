import React, { useEffect, useState, useRef } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faArrowLeft, faArrowDown, faArrowRight, faArrowUp, faEye, faEyeSlash, faCircle } from "@fortawesome/free-solid-svg-icons";

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Slide from '@mui/material/Slide';

import "./PuntaEClicca.scss";

export default function PuntaEClicca() {
    const data = [
        {
            image: "boat.jpeg", left: 0, right: 0, up: 0, down: 1,
            title: "Ingresso",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet est id facilis consequatur tempora cum assumenda excepturi veniam repellat. Vel voluptates tempora excepturi consectetur doloribus dolor fugit repellendus necessitatibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatum quibusdam obcaecati necessitatibus dignissimos labore possimus, alias eius commodi quis, assumenda eligendi nisi praesentium cumque libero? Sed, similique. Quia, nobis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quidem nobis, facere minus maxime porro voluptatibus reiciendis nisi dolorum qui alias facilis nulla at et libero assumenda expedita deleniti provident."
        },
        {
            image: "cabin.jpg", up: 0,
            title: "Cabina",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet est id facilis consequatur tempora cum assumenda excepturi veniam repellat. Vel voluptates tempora excepturi consectetur doloribus dolor fugit repellendus necessitatibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatum quibusdam obcaecati necessitatibus dignissimos labore possimus, alias eius commodi quis, assumenda eligendi nisi praesentium cumque libero? Sed, similique. Quia, nobis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quidem nobis, facere minus maxime porro voluptatibus reiciendis nisi dolorum qui alias facilis nulla at et libero assumenda expedita deleniti provident."
        },
    ];
    const types = [
        { text: "up", icon: faArrowUp },
        { text: "down", icon: faArrowDown },
        { text: "left", icon: faArrowLeft },
        { text: "right", icon: faArrowRight },
    ];
    const [currentType, setCurrentType] = useState("down");
    const [currentData, changeCurrentData] = useState(0);
    const [mousePosition, setMousePosition] = useState({x: 0, y:0});
    const [showMouse, setShowMouse] = useState(false);
    const [textMouse, setTextMouse] = useState(faArrowLeft);
    const [animatedMousePosition, setAnimatedMousePosition] = useState({x: 0, y: 0});
    const requestRef = useRef(null);
    const [mouseTitle, setMouseTitle] = useState("");
    const [textHidden, setTextHidden] = useState(false);

    useEffect(() => {
        const mouseMoveHandler = (event) => {
            const { clientX, clientY } = event;
            setMousePosition({ x: clientX, y: clientY });
        };
        document.addEventListener("mousemove", mouseMoveHandler);
        animatedOutline();
        return () => {
            document.removeEventListener("mousemove", mouseMoveHandler);
            window.cancelAnimationFrame(requestRef.current);
        };
    }, []);
    useEffect( () => {
        requestRef.current = window.requestAnimationFrame(animatedOutline);
    }, [animatedMousePosition]);
    const delay = 15;
    const animatedOutline = () => {
        setAnimatedMousePosition({
            x: animatedMousePosition.x + (mousePosition.x - animatedMousePosition.x)/delay,
            y: animatedMousePosition.y + (mousePosition.y - animatedMousePosition.y)/delay
        });
    };

    return (
        <div className="container-fluid full-container">
            <div className="cursor-outline-container" style={{left: `${animatedMousePosition.x}px`, top: `${animatedMousePosition.y}px`, display: `${(showMouse?'flex':'none')}`}}>
                <div className="cursor-outline">
                </div>
                <h2 className="cursor-text cursor-text-outline fw-bold p-3 roundend">{mouseTitle}</h2>
            </div>
            <div className="cursor-dot fw-bold fs-4"  style={{left: `${mousePosition.x}px`, top: `${mousePosition.y}px`, display: `${(showMouse?'flex':'none')}`}}>
                <FontAwesomeIcon className="" icon={textMouse} />
            </div>
            <TransitionGroup>
                <CSSTransition 
                    key={data[currentData].image}
                    timeout={{ enter: 1000, exit: 1000 }}
                    classNames={`fade-${currentType}`}>
                    <img src={`/images/${data[currentData].image}`} alt="" className="full-image"></img>
                </CSSTransition>
            </TransitionGroup>
            <div className="grid">
                <button className="p-3 back rounded-circle" onClick={() => {window.location='/'}}><FontAwesomeIcon icon={faHouse} /> </button>
                <FontAwesomeIcon 
                    className="eye fs-3 p-3" 
                    icon={textHidden?faEyeSlash:faEye} 
                    style={{backgroundColor: `${textHidden?"rgba(18, 135, 139, 0.66)":"transparent"}`}}
                    onClick={() => {setTextHidden(!textHidden);}}
                />
                {types.map(type => {
                    if (data[currentData][type.text] === undefined) {
                        return (<></>);
                    } else {
                        return (
                            <div key={type.text} className={`arrow ${type.text}`}
                                onClick={() => { setShowMouse(false);setCurrentType(type.text); changeCurrentData(data[currentData][type.text]); }}
                                onMouseOver={() => {setTextMouse(type.icon); setShowMouse(true); setMouseTitle(data[data[currentData][type.text]].title)}}
                                onMouseLeave={() => {setTextMouse(faCircle); setShowMouse(true);}}
                            >
                            </div>
                        );
                    }
                })
                }
                <Slide direction="left" in={!textHidden}>
                    <div className="text-area">
                        <div className="text-container">
                            <h1 className="title mb-5 mt-5">{data[currentData].title}</h1>
                            <p className="description-text px-5">{data[currentData].description}</p>
                        </div>
                    </div>
                </Slide>
            </div>
        </div>
    );
};