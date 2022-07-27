import React from "react";
import '../home_css/OutfitGallery.css';

function OutfitGallery(){
    return (
        <div className="OutfitGallery">
            <div className="men Outfit"><a href="#" className="menLink">Men's</a></div>
            <div className="women Outfit"><a href="#" className="womenLink">Women's</a></div>
            <div className="kids Outfit"><a href="#" className="kidLink">Kids'</a></div>
        </div>
    );
}

export default OutfitGallery;