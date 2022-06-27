import React, {Component} from 'react';
import Wrapper from "../components/Wrapper";
import secondPage from "../assets/images/02.svg"
import home from "../assets/images/home.svg"
import rate from "../assets/images/chart.svg"
import user from "../assets/images/user.svg"
import menu from "../assets/images/menu.svg"
import radio from "../assets/images/radio.svg"
import round from "../assets/images/round.svg"


class Rating extends Component {
    render() {
        return (
            <Wrapper>
                <div className="rating">
                    <h2>Rating</h2>
                </div>
                <div className="number">
                    <img src={secondPage} alt="number"/>
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
                    <div>
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
            </Wrapper>
        );
    }
}

export default Rating;
