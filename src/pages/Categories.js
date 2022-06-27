import React, {} from 'react';
import Wrapper from "../components/Wrapper";
import fourthpage from "../assets/images/04.svg";
import round from "../assets/images/round.svg";
import radio from "../assets/images/radio.svg";
import home from "../assets/images/home.svg";
import rate from "../assets/images/chart.svg";
import user from "../assets/images/user.svg";
import menu from "../assets/images/menu.svg";
import {useNavigate} from "react-router";


export default function Categories(){
    const navigate = useNavigate();
    const handleHome = () =>{
        navigate('/')
    }

    return(
        <Wrapper>
            <div className="rating">
                <h2>Categories</h2>
            </div>
            <div className="number">
                <img src={fourthpage} alt="number"/>
            </div>
            <div className="round1">
                <img src={round} alt="round"/>
            </div>
            <div className="radiosec">
                <img src={radio} alt="radio"/>
            </div>
            <div className="line">
            </div>
            <div className="icons">
                <div onClick={handleHome}>
                    <img src={home} alt="home"/>
                </div>
                <div>
                    <img src={rate} alt="rates"/>
                </div>
                <div>
                    <img src={user} alt="user"/>
                </div>
                <div>
                    <img src={menu} alt="menu"/>
                </div>
            </div>
            <div className="round2">
                <img src={round} alt="round"/>
            </div>
            <div className="cat">
                <div className="first">
                    <div className="text">
                        <div className="inner-text">Classic</div>
                    </div>
                </div>
                <div className="second">
                    <div className="text">
                        <div className="inner-text">Classic</div>
                    </div>
                </div>
                <div className="third">
                    <div className="text">
                        <div className="inner-text">Hard</div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
