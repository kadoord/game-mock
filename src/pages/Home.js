import React, {} from 'react';
import Wrapper from "../components/Wrapper";
import {useNavigate} from "react-router";
import logo from "../assets/images/radio4.svg"
import round from "../assets/images/round.svg"
import pagenum from "../assets/images/01.svg"

export default function Home(){

    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate('/login');
    };
    const handleRegistr = () =>{
        navigate('/registration')
    }

    return (
        <Wrapper>
            <div className="form">
                <div className="pagenum">
                    <img src={pagenum} alt="number"/>
                </div>
                <div className="round">
                    <img src={round} alt="round"/>
                </div>
                <img src={logo} alt="radio"/>
                <h1 className="names">Radio Game</h1>
                <button onClick={handleClick} className="btn">Login</button>
                <button onClick={handleRegistr} className="btn2">Registration</button>
                <div className="round2">
                    <img src={round} alt="round" className="bottom-img"/>
                </div>
            </div>

        </Wrapper>
    );

}