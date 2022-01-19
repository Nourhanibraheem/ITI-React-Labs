import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import {faFacebook,faTwitter,faLinkedin,} from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <div className="fluid-container bg-dark text-white footer">
          <div className="row col-12">
            <div className="col-4">
              <h4 className="get">Get In Touch</h4>
              <p>
                <FontAwesomeIcon icon={faPhoneSquare} /> 01207479966
              </p>
              <p>
              <FontAwesomeIcon className="me-3" icon={faEnvelope}/>Nora@iti.com
              </p>
            </div>
            <div className="col-4 text-center">
              <button className=" contact btn btn-outline-light"> Contact Me </button>
            </div>
            <div className="col-4 text-end">
              <p>
                <FontAwesomeIcon className="me-3" icon={faFacebook} />
                <FontAwesomeIcon className="me-3" icon={faTwitter} />
                <FontAwesomeIcon className="me-3" icon={faLinkedin} />
              </p>
              <p>CopyRight © 2022 NR</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
