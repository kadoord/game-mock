import React, {Component} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Rating from "./pages/Rating";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Categories from "./pages/Categories";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/rating" element={<Rating />} />
                    <Route path="/category" element={<Categories />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/registration" element={<Registration/>} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;
