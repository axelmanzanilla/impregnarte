import React from "react";
import { Map as MapComponent, IFrame } from "./MapStyles";

function Map(){
    return(
        <MapComponent>
            <h2>Centro de distribución:</h2>
            <IFrame src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3201.2762994854347!2d-89.62963261095555!3d20.97640110278354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5673e0ce5c1849%3A0x5241585f626c807b!2sC.%2074%20425%2C%20Centro%2C%2097000%20M%C3%A9rida%2C%20Yuc.!5e0!3m2!1sen!2smx!4v1636684102166!5m2!1sen!2smx" loading="eager"></IFrame>
        </MapComponent>
    )
}

export default Map;
