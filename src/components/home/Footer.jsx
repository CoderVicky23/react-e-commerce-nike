import React from "react";
import { IoLogoFacebook, IoLogoInstagram, IoLogoYoutube, IoLogoTwitter, IoLocationSharp } from "react-icons/io5";
import '../home_css/Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footerOverlay"></div>
            <div className="footerDisplay">
                <div className="social-media-heading">Reach Out To Us At</div>
                <div className="social-media-icons">
                    <a href="#"><IoLogoFacebook className="media-icons"/></a>
                    <a href="#"><IoLogoInstagram className="media-icons"/></a>
                    <a href="#"><IoLogoYoutube className="media-icons" /></a>
                    <a href="#"><IoLogoTwitter className="media-icons"/></a>
                </div>
                <div className="company-address"><IoLocationSharp /> New Delhi, India</div>
            </div>
            <div className="rights-reserved">© 2022 Nike, Inc. All Rights Reserved</div>
        </div>
    );
}

export default Footer;