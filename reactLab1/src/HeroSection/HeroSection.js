import React from "react";
import './HeroSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './img/image.jpeg';

class HeroSection extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
            <div className="fluid-container">
                <div className="card bg-dark text-white">
                    <img src={logo} className="card-img" alt="img">
                    </img>
                    <div  className="card-img-overlay text-center col-3 ms-5 ">
                        <h2 className="card-title">Nourhan Ibraheem</h2>
                        <p className="card-text">Full Stack Developer</p>
                        <button type="button" className="btn btn-outline-light con">Contact Me</button>
                    </div>

                </div>
            </div>
            </>

        );
    }

}
export default HeroSection;